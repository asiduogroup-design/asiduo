import EmptyState from "../../components/common/EmptyState";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useAsync from "../../hooks/useAsync";
import { inquiryService } from "../../services/api";

const InquiryManagementPage = () => {
  const { data, loading } = useAsync(() => inquiryService.getInquiries());

  return (
    <div>
      <div className="admin-header">
        <h1>Inquiry Management</h1>
        <p>Track general inquiries and quote requests submitted through the website.</p>
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
              <span className={`badge badge-${inquiry.inquiryType}`}>{inquiry.inquiryType}</span>
            </div>
            <p><strong>Email:</strong> {inquiry.email}</p>
            <p><strong>Phone:</strong> {inquiry.phone}</p>
            <p><strong>Country:</strong> {inquiry.country}</p>
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
