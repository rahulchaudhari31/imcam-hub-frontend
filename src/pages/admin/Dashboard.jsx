import { Link } from 'react-router-dom';
import { FileText, Clock, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const stats = [
  {
    title: 'Total Demo Requests',
    value: '—',
    icon: FileText,
    iconBg: 'bg-blue/10',
    iconColor: 'text-blue',
  },
  {
    title: 'New Requests',
    value: '—',
    icon: Clock,
    iconBg: 'bg-emerald/10',
    iconColor: 'text-emerald',
  },
  {
    title: 'Contacted',
    value: '—',
    icon: Phone,
    iconBg: 'bg-indigo/10',
    iconColor: 'text-indigo',
  },
  {
    title: 'Closed',
    value: '—',
    icon: CheckCircle2,
    iconBg: 'bg-purple/10',
    iconColor: 'text-purple',
  },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold text-navy">
          Admin Dashboard
        </h1>
        <p className="text-text-secondary mt-1">
          {user?.fullName
            ? `Welcome back, ${user.fullName}. `
            : ''}
          Overview of your ImCam Hub activity and demo requests.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white rounded-2xl border border-sand-dark p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl ${stat.iconBg} flex items-center justify-center`}
                >
                  <Icon size={20} className={stat.iconColor} />
                </div>
                <p className="text-sm font-medium text-text-secondary">
                  {stat.title}
                </p>
              </div>
              <p className="text-3xl font-bold text-navy">{stat.value}</p>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-2xl border border-sand-dark p-6 mb-6">
        <h2 className="text-lg font-heading font-bold text-navy mb-4">
          Recent Demo Requests
        </h2>
        <div className="text-center py-10">
          <FileText size={40} className="mx-auto text-text-muted mb-3" />
          <p className="text-text-secondary text-sm">
            Demo request activity will appear here.
          </p>
          <p className="text-text-muted text-xs mt-1">
            Request management will be available in the Demo Requests section.
          </p>
        </div>
      </div>

      <Link
        to="/admin/demo-requests"
        className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-200 shadow-[0_2px_8px_rgba(242,153,74,0.35)] hover:shadow-[0_4px_16px_rgba(242,153,74,0.4)] hover:scale-[1.03] active:scale-[0.98]"
      >
        View Demo Requests
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}
