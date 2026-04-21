import { useState, useCallback } from "react";
import EmptyState from "../../components/common/EmptyState";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useAsync from "../../hooks/useAsync";
import { inquiryService } from "../../services/api";

const cap = (str) => str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

const InquiryManagementPage = () => {
  const [filters, setFilters] = useState({ country: "", serviceType: "", partyType: "" });
  const [applied, setApplied] = useState({});
  const [deletingId, setDeletingId] = useState(null);

  const fetchFn = useCallback(() => inquiryService.getInquiries(applied), [applied]);
  const { data, loading, setData, execute } = useAsync(fetchFn, true, [applied]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const active = Object.fromEntries(
      Object.entries(filters).filter(([, v]) => v !== "")
    );
    setApplied(active);
  };

  const clearFilters = () => {
    setFilters({ country: "", serviceType: "", partyType: "" });
    setApplied({});
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this inquiry?")) return;
    setDeletingId(id);
    try {
      await inquiryService.deleteInquiry(id);
      setData((prev) => ({
        ...prev,
        data: prev.data.filter((inq) => inq._id !== id),
        count: prev.count - 1
      }));
    } finally {
      setDeletingId(null);
    }
  };

  const buildMailto = (inquiry) => {
    const subject = encodeURIComponent(`Re: Your Inquiry – ${inquiry.productInterest || "Quote Request"}`);
    const body = encodeURIComponent(
      `Dear ${inquiry.name},\n\nThank you for reaching out to us.\n\n` +
      `Regarding your inquiry about "${inquiry.productInterest}", we are pleased to assist you.\n\n` +
      `Best regards,\nAsiduo Trade Team`
    );
    return `mailto:${inquiry.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div>
      <div className="admin-header">
        <h1>Inquiry Management</h1>
        <p>Track general inquiries and quote requests submitted through the website.</p>
      </div>

      {/* Filters */}
      <div className="admin-filters" style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "flex-end", marginBottom: "24px", background: "#f8f9fa", padding: "16px", borderRadius: "8px" }}>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", fontWeight: 600 }}>
          COUNTRY
          <input
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
            placeholder="e.g. Germany"
            style={{ padding: "8px 10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px", minWidth: "160px" }}
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", fontWeight: 600 }}>
          SERVICE TYPE
          <select
            name="serviceType"
            value={filters.serviceType}
            onChange={handleFilterChange}
            style={{ padding: "8px 10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px", minWidth: "140px" }}
          >
            <option value="">All</option>
            <option value="import">Import</option>
            <option value="export">Export</option>
          </select>
        </label>
        <label style={{ display: "flex", flexDirection: "column", gap: "4px", fontSize: "12px", fontWeight: 600 }}>
          PARTY TYPE
          <select
            name="partyType"
            value={filters.partyType}
            onChange={handleFilterChange}
            style={{ padding: "8px 10px", border: "1px solid #ddd", borderRadius: "4px", fontSize: "14px", minWidth: "140px" }}
          >
            <option value="">All</option>
            <option value="buyer">Buyer</option>
            <option value="supplier">Supplier</option>
          </select>
        </label>
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={applyFilters} className="btn btn-primary" style={{ padding: "8px 18px", fontSize: "13px" }}>Apply</button>
          <button onClick={clearFilters} className="btn btn-secondary" style={{ padding: "8px 18px", fontSize: "13px" }}>Clear</button>
        </div>
      </div>

      {loading ? <LoadingSpinner message="Loading inquiries..." /> : null}
      {!loading && !data?.data?.length ? (
        <EmptyState title="No inquiries yet" message="Submitted forms will appear here." />
      ) : null}
      <div className="admin-list">
        {data?.data?.map((inquiry) => (
          <div className="admin-list-card vertical" key={inquiry._id}>
            <div className="card-topline">
              <h3>{inquiry.name}</h3>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span className={`badge badge-${inquiry.inquiryType}`}>{inquiry.inquiryType}</span>
                <a
                  href={buildMailto(inquiry)}
                  className="btn btn-primary"
                  style={{ padding: "4px 14px", fontSize: "12px", textDecoration: "none" }}
                >
                  Reply
                </a>
                <button
                  onClick={() => handleDelete(inquiry._id)}
                  disabled={deletingId === inquiry._id}
                  className="btn btn-danger"
                  style={{ padding: "4px 14px", fontSize: "12px" }}
                >
                  {deletingId === inquiry._id ? "Deleting…" : "Delete"}
                </button>
              </div>
            </div>
            <p><strong>Email:</strong> {inquiry.email}</p>
            {inquiry.phone && <p><strong>Phone:</strong> {inquiry.phone}</p>}
            {inquiry.company && <p><strong>Company:</strong> {inquiry.company}</p>}
            {inquiry.country && <p><strong>Country:</strong> {inquiry.country}</p>}
            {inquiry.gstNumber && <p><strong>GST Number:</strong> {inquiry.gstNumber}</p>}
            {inquiry.partyType && <p><strong>Party Type:</strong> {cap(inquiry.partyType)}</p>}
            {inquiry.partySubType && <p><strong>Sub Type:</strong> {cap(inquiry.partySubType)}</p>}
            {inquiry.serviceType && <p><strong>Service Type:</strong> {cap(inquiry.serviceType)}</p>}
            <p><strong>Product Interest:</strong> {inquiry.productInterest}</p>
            <p><strong>Message:</strong> {inquiry.message}</p>
            <p><strong>Submitted:</strong> {new Date(inquiry.createdAt).toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InquiryManagementPage;

