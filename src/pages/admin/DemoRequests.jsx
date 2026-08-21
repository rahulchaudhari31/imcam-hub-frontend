import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FileText, ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Badge from '../../components/Badge';

const API_URL = import.meta.env.VITE_API_URL;
const LIMIT = 20;

const STATUS_OPTIONS = [
  { value: '', label: 'All' },
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'scheduled', label: 'Scheduled' },
  { value: 'closed', label: 'Closed' },
];

const STATUS_BADGE = {
  new: 'blue',
  contacted: 'accent',
  scheduled: 'emerald',
  closed: 'default',
};

function SkeletonRow() {
  return (
    <tr className="border-b border-sand-dark animate-pulse">
      {Array.from({ length: 8 }).map((_, i) => (
        <td key={i} className="px-4 py-3">
          <div className="h-4 bg-sand rounded w-3/4" />
        </td>
      ))}
    </tr>
  );
}

export default function DemoRequests() {
  const { authFetch } = useAuth();
  const [requests, setRequests] = useState([]);
  const [pagination, setPagination] = useState({ total: 0, page: 1, limit: LIMIT, totalPages: 1 });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    const params = new URLSearchParams({ page: String(currentPage), limit: String(LIMIT) });
    if (selectedStatus) params.set('status', selectedStatus);

    try {
      const data = await authFetch(`${API_URL}/api/demo-requests?${params}`);
      setRequests(data.data || []);
      setPagination(data.pagination || { total: 0, page: 1, limit: LIMIT, totalPages: 1 });
    } catch (err) {
      if (err.status === 403) {
        setError('You do not have permission to view demo requests.');
      } else {
        setError(err.message || 'Unable to load demo requests. Please try again.');
      }
      setRequests([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, selectedStatus, authFetch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
    setCurrentPage(1);
  };

  const start = pagination.total === 0 ? 0 : (pagination.page - 1) * pagination.limit + 1;
  const end = Math.min(pagination.page * pagination.limit, pagination.total);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-heading font-bold text-navy">Demo Requests</h1>
        <p className="text-text-secondary mt-1">
          Manage and review demo requests submitted through the website.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-sand-dark overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-sand-dark">
          <div className="flex flex-wrap gap-2">
            {STATUS_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleStatusChange(opt.value)}
                className={`px-3.5 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedStatus === opt.value
                    ? 'bg-navy text-white'
                    : 'bg-sand text-text-secondary hover:bg-sand-dark'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-text-muted whitespace-nowrap">
            Showing {start}–{end} of {pagination.total} requests
          </p>
        </div>

        {error && (
          <div className="px-5 py-8 text-center">
            <AlertCircle size={32} className="mx-auto text-rose mb-3" />
            <p className="text-sm text-text-secondary mb-3">{error}</p>
            <button
              onClick={fetchData}
              className="inline-flex items-center gap-2 bg-amber hover:bg-amber-dark text-white px-5 py-2 rounded-full text-sm font-semibold transition-all"
            >
              Retry
            </button>
          </div>
        )}

        {!error && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-sand-dark text-left text-text-muted">
                  <th className="px-4 py-3 font-medium">Company</th>
                  <th className="px-4 py-3 font-medium">Full Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Phone</th>
                  <th className="px-4 py-3 font-medium">Firm Size</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Created</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading && (
                  <>
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                    <SkeletonRow />
                  </>
                )}
                {!loading && requests.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-4 py-12 text-center">
                      <FileText size={36} className="mx-auto text-text-muted mb-3" />
                      <p className="text-text-secondary text-sm">No demo requests found.</p>
                    </td>
                  </tr>
                )}
                {!loading &&
                  requests.map((req) => (
                    <tr key={req.id} className="border-b border-sand-dark hover:bg-offwhite/60 transition-colors">
                      <td className="px-4 py-3 text-navy font-medium max-w-[180px] truncate">{req.company}</td>
                      <td className="px-4 py-3 text-text-secondary max-w-[150px] truncate">{req.full_name}</td>
                      <td className="px-4 py-3 text-text-secondary max-w-[200px] truncate">{req.email}</td>
                      <td className="px-4 py-3 text-text-secondary">{req.phone || '—'}</td>
                      <td className="px-4 py-3 text-text-secondary">{req.firm_size || '—'}</td>
                      <td className="px-4 py-3">
                        <Badge variant={STATUS_BADGE[req.status] || 'default'}>
                          {req.status ? req.status.charAt(0).toUpperCase() + req.status.slice(1) : '—'}
                        </Badge>
                      </td>
                      <td className="px-4 py-3 text-text-muted whitespace-nowrap">
                        {req.created_at ? new Date(req.created_at).toLocaleString() : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          to={`/admin/demo-requests/${req.id}`}
                          className="inline-flex items-center gap-1 text-blue hover:text-blue-light text-sm font-medium transition-colors"
                        >
                          View
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}

        {!error && pagination.totalPages > 1 && (
          <div className="flex items-center justify-between px-5 py-4 border-t border-sand-dark">
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage <= 1}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium border border-sand-dark text-text-secondary hover:bg-sand transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Previous
            </button>
            <div className="flex gap-1">
              {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                    page === currentPage
                      ? 'bg-navy text-white'
                      : 'text-text-secondary hover:bg-sand'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage >= pagination.totalPages}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full text-sm font-medium border border-sand-dark text-text-secondary hover:bg-sand transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
