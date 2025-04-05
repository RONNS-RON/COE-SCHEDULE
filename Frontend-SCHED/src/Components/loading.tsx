const LoadingComponent: React.FC = () => {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        {/* You can replace the spinner with your Facebook logo here */}
      </div>
    );
  };
  
  export default LoadingComponent;