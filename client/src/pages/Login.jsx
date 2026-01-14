import { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import logo from "../assets/images/logo.svg";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Handle login logic here
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <img src={logo} alt="JobLogger" className="logo" />
        <h4>Welcome Back</h4>
        
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          Sign In
        </button>

        <p>
          Don't have an account?
          <Link to="/register" className="member-btn">
            Create Account
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
