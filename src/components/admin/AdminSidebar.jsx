import { Link, NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, LogOut, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const sidebarLinks = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard, end: true },
  { name: 'Demo Requests', path: '/admin/demo-requests', icon: FileText },
];

export default function AdminSidebar({ mobileOpen, onClose }) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const linkBase =
    'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors';
  const linkActive = 'bg-blue/10 text-blue';
  const linkIdle = 'text-text-secondary hover:text-navy hover:bg-sand/60';

  const sidebarContent = (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-sand-dark shrink-0">
        <Link to="/admin" className="flex items-center gap-2.5" onClick={onClose}>
          <div className="w-8 h-8 bg-gradient-to-br from-blue to-indigo rounded-lg flex items-center justify-center">
            <span className="text-white text-xs font-bold">IC</span>
          </div>
          <span className="text-sm font-bold text-navy">ImCam Hub</span>
        </Link>
        <button
          onClick={onClose}
          className="lg:hidden p-1.5 rounded-lg hover:bg-sand transition-colors text-text-muted"
          aria-label="Close sidebar"
        >
          <X size={18} />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <p className="px-4 mb-2 text-[11px] font-semibold text-text-muted uppercase tracking-wider">
          Menu
        </p>
        <div className="space-y-1">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            return (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.end}
                onClick={onClose}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                <Icon size={18} />
                {link.name}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* User info + Logout */}
      <div className="border-t border-sand-dark px-4 py-4 shrink-0">
        {user && (
          <div className="mb-3">
            <p className="text-sm font-semibold text-navy truncate">{user.fullName}</p>
            <p className="text-xs text-text-muted truncate">{user.email}</p>
            <p className="text-[11px] font-medium text-indigo mt-0.5 capitalize">{user.role}</p>
          </div>
        )}
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-navy hover:bg-sand/60 transition-colors"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white border-r border-sand-dark z-30">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 bg-navy/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          <aside className="fixed inset-y-0 left-0 w-64 bg-white z-50 lg:hidden shadow-xl">
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}
