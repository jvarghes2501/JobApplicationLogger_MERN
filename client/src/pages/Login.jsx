import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import logo from "../assets/images/logo.svg";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful!");
    return redirect("/dashboard");
  } catch (err) {
    toast.error(err.response?.data?.message || "Login failed");
  }
  return null;
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form className="form" method="post">
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
            required
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Logging in..." : "Sign In"}
        </button>

        <p>
          Don't have an account?
          <Link to="/register" className="member-btn">
            Create Account
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
