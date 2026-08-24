import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext(null);

const TOKEN_KEY = 'imcam_hub_token';
const USER_KEY = 'imcam_hub_user';

function readToken() {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch {
    return null;
  }
}

function saveAuth(token, user) {
  try {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch {
    // localStorage unavailable — fail silently
  }
}

function clearAuth() {
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  } catch {
    // localStorage unavailable — fail silently
  }
}

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = readToken();

    if (!storedToken) {
      setLoading(false);
      return;
    }

    setToken(storedToken);

    fetch(`${API_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${storedToken}` },
    })
      .then((res) => {
        if (res.status === 401) {
          clearAuth();
          setToken(null);
          setUser(null);
          setLoading(false);
          return null;
        }
        if (!res.ok) {
          throw new Error('Unexpected error');
        }
        return res.json();
      })
      .then((data) => {
        if (data?.user) {
          setUser(data.user);
          saveAuth(storedToken, data.user);
        }
      })
      .catch(() => {
        clearAuth();
        setToken(null);
        setUser(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const login = useCallback(async (email, password) => {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      const err = new Error(data?.message || 'Login failed. Please try again.');
      throw err;
    }

    const { token: newToken, user: newUser } = data;
    saveAuth(newToken, newUser);
    setToken(newToken);
    setUser(newUser);
    return newUser;
  }, []);

  const logout = useCallback(() => {
    clearAuth();
    setToken(null);
    setUser(null);
  }, []);

  const authFetch = useCallback(
    async (url, options = {}) => {
      const headers = { ...options.headers };

      if (!(headers instanceof Headers) && typeof headers === 'object') {
        if (!headers['Authorization'] && token) {
          headers['Authorization'] = `Bearer ${token}`;
        }
        if (!headers['Content-Type'] && options.body && typeof options.body === 'string') {
          headers['Content-Type'] = 'application/json';
        }
      }

      const res = await fetch(url, { ...options, headers });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        if (res.status === 401) {
          clearAuth();
          setToken(null);
          setUser(null);
        }
        const err = new Error(
          data?.message || 'Something went wrong. Please try again.'
        );
        err.status = res.status;
        throw err;
      }

      return data;
    },
    [token]
  );

  const isAdmin = user?.role === 'admin';

  const value = {
    user,
    token,
    loading,
    login,
    logout,
    authFetch,
    isAdmin,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return ctx;
}
