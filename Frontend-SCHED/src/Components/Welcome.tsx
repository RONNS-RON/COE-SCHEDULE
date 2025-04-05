import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  const handleProceed = () => {
    // Navigate to the dashboard after clicking "Proceed to Dashboard"
    navigate("/dashboard");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h2 className="card-title text-center">Welcome</h2>
          <p className="text-center">Click the button below to proceed to the dashboard</p>
          <div className="mt-4">
            <button className="btn btn-primary w-100" onClick={handleProceed}>
              Proceed to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
