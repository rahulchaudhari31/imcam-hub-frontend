import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Badge from '../../components/Badge';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const STATUS_BADGE = {
  new: 'blue',
  contacted: 'accent',
  scheduled: 'emerald',
  closed: 'default',
};

function DetailSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="bg-white rounded-2xl border border-sand-dark p-6">
        <div className="h-5 bg-sand rounded w-32 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i}>
              <div className="h-3 bg-sand rounded w-20 mb-2" />
              <div className="h-4 bg-sand rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-sand-dark p-6">
        <div className="h-5 bg-sand rounded w-24 mb-4" />
        <div className="h-4 bg-sand rounded w-full mb-2" />
        <div className="h-4 bg-sand rounded w-5/6 mb-2" />
        <div className="h-4 bg-sand rounded w-2/3" />
      </div>
    </div>
  );
}

export default function DemoRequestDetail() {
  const { id } = useParams();
  const { authFetch } = useAuth();
  const [request, setRequest] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchRequest() {
      setLoading(true);
      setError(null);

      try {
        const data = await authFetch(`${API_URL}/api/demo-requests/${id}`);
        if (!cancelled) setRequest(data.data || null);
      } catch (err) {
        if (cancelled) return;
        if (err.status === 403) {
          setError('You do not have permission to view this demo request.');
        } else if (err.status === 404) {
          setError('Demo request not found.');
        } else {
          setError(err.message || 'Unable to load demo request. Please try again.');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchRequest();
    return () => { cancelled = true; };
  }, [id, authFetch]);

  return (
    <div>
      <div className="mb-5">
        <Link
          to="/admin/demo-requests"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-navy transition-colors mb-3"
        >
          <ArrowLeft size={16} />
          Back to Demo Requests
        </Link>
        <h1 className="text-xl sm:text-2xl font-heading font-bold text-navy">Demo Request</h1>
      </div>

      {loading && <DetailSkeleton />}

      {error && !loading && (
        <div className="bg-white rounded-2xl border border-sand-dark px-5 py-8 text-center">
          <AlertCircle size={32} className="mx-auto text-rose mb-3" />
          <p className="text-sm text-text-secondary mb-4">{error}</p>
          <Link
            to="/admin/demo-requests"
            className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Return to List
          </Link>
        </div>
      )}

      {!loading && !error && request && (
        <div className="space-y-5">
          <div className="bg-white rounded-2xl border border-sand-dark p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-5">Request Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <p className="text-xs text-text-muted mb-1">Company</p>
                <p className="text-sm font-medium text-navy">{request.company || '—'}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Full Name</p>
                <p className="text-sm font-medium text-navy">{request.full_name || '—'}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Email</p>
                <p className="text-sm font-medium text-navy">{request.email || '—'}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Phone</p>
                <p className="text-sm font-medium text-navy">{request.phone || '—'}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Firm Size</p>
                <p className="text-sm font-medium text-navy">{request.firm_size || '—'}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Preferred Date</p>
                <p className="text-sm font-medium text-navy">
                  {request.preferred_date ? new Date(request.preferred_date).toLocaleDateString() : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Preferred Time</p>
                <p className="text-sm font-medium text-navy">
                  {request.preferred_time ? request.preferred_time.slice(0, 5) : '—'}
                </p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1">Status</p>
                <Badge variant={STATUS_BADGE[request.status] || 'default'}>
                  {request.status ? request.status.charAt(0).toUpperCase() + request.status.slice(1) : '—'}
                </Badge>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs text-text-muted mb-1">Created</p>
                <p className="text-sm font-medium text-navy">
                  {request.created_at ? new Date(request.created_at).toLocaleString() : '—'}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-sand-dark p-5 sm:p-6">
            <h2 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">Message</h2>
            <p className="text-sm text-text-secondary whitespace-pre-wrap leading-relaxed">
              {request.message || '—'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
