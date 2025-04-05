import "../Design/login.css";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const TEMP_USERNAME = "clyde@email.com";
  const TEMP_PASSWORD = "123";

  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Basic validation check for temporary username and password
    if (email === TEMP_USERNAME && password === TEMP_PASSWORD) {
      setError(""); // Clear error if credentials are correct
      navigate("/welcome"); // Redirect to the welcome page
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card" style={{ width: "25rem" }}>
        <div className="card-body">
          <h2 className="card-title text-center">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </div>
          </form>

          <div className="mt-3 text-center">
            <p className="text-muted">
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
