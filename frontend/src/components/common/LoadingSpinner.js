const LoadingSpinner = ({ message = "Loading..." }) => (
  <div className="status-card">
    <div className="spinner" />
    <p>{message}</p>
  </div>
);

export default LoadingSpinner;
