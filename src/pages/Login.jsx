import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LogIn, Mail, Lock } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { useAuth } from '../context/AuthContext';

const fieldBase =
  'w-full px-4 py-3 rounded-xl border bg-white text-sm text-navy placeholder:text-text-muted/50 focus:outline-none transition-colors';
const fieldIdle = 'border-sand-dark focus:ring-2 focus:ring-blue/30 focus:border-blue';
const fieldError = 'border-red-400 focus:ring-2 focus:ring-red-200';

export default function Login() {
  usePageMeta(
    'Sign In',
    'Sign in to your ImCam Hub account.'
  );

  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (submitError) setSubmitError('');
  };

  const validate = () => {
    const e = {};
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.password) {
      e.password = 'Password is required.';
    }
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    try {
      const user = await login(form.email.trim(), form.password);
      if (user?.role === 'admin') {
        navigate('/admin', { replace: true });
      } else if (user?.role === 'caseworker') {
        navigate('/caseworker/dashboard', { replace: true });
      } else if (user?.role === 'client') {
        navigate('/client/dashboard', { replace: true });
      } else {
        navigate('/', { replace: true });
      }
    } catch (err) {
      setSubmitError(
        err.message || 'Login failed. Please try again.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section className="section-padding bg-gradient-to-b from-offwhite to-sand pb-6 md:pb-10">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-flex items-center px-4 py-1.5 bg-indigo-pale text-indigo text-xs font-semibold rounded-full mb-4">
              Sign In
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-navy mb-4 leading-tight">
              Welcome Back
            </h1>
            <p className="text-base sm:text-lg text-text-secondary max-w-xl mx-auto">
              Sign in to access your ImCam Hub dashboard.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FORM */}
      <section className="section-padding pt-0 md:pt-4">
        <div className="container-app">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-white rounded-3xl border border-sand-dark shadow-lg p-6 md:p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue via-indigo to-purple" />
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">
                    Email<span className="text-amber ml-0.5">*</span>
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/50" />
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={update('email')}
                      placeholder="admin@company.com"
                      className={`${fieldBase} pl-10 ${errors.email ? fieldError : fieldIdle}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-navy mb-1.5">
                    Password<span className="text-amber ml-0.5">*</span>
                  </label>
                  <div className="relative">
                    <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted/50" />
                    <input
                      id="password"
                      type="password"
                      value={form.password}
                      onChange={update('password')}
                      placeholder="Enter your password"
                      className={`${fieldBase} pl-10 ${errors.password ? fieldError : fieldIdle}`}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.password}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-red-500 text-sm font-medium text-center">{submitError}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 btn-gradient-primary px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <LogIn size={16} /> {submitting ? 'Signing in...' : 'Sign In'}
                </button>

                <p className="text-center text-sm text-text-muted">
                  <Link to="/" className="text-blue hover:text-blue-dark font-medium transition-colors">
                    Back to home
                  </Link>
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
