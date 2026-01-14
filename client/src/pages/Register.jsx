import { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import logo from "../assets/images/logo.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration data:", formData);
    // Handle registration logic here
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <img src={logo} alt="JobLogger" className="logo" />
        <h4>Create Your Account</h4>
        
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="At least 8 characters"
            minLength="8"
          />
        </div>

        <button type="submit" className="btn btn-block">
          Create Account
        </button>

        <p>
          Already have an account?
          <Link to="/login" className="member-btn">
            Sign In
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
