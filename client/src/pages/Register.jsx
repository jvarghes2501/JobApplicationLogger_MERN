import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import logo from "../assets/images/logo.svg";
import { Form, Link, useNavigation, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful!");
    return redirect("/login");
  } catch (err) {
    toast.error(err.response?.data?.message || "Registration failed");
    return err;
  }
};

const Register = () => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Registration data:", formData);
  //   // Handle registration logic here
  // };

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <img src={logo} alt="JobLogger" className="logo" />
        <h4>Create Your Account</h4>

        <div className="form-row">
          <label htmlFor="name" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-input"
            required
            placeholder="Enter your first name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="form-input"
            required
            placeholder="Enter your last name"
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
            required
            placeholder="your.email@example.com"
          />
        </div>

        <div className="form-row">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="form-input"
            required
            placeholder="City, Country"
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
            placeholder="At least 8 characters"
            minLength="8"
          />
        </div>

        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "Registering..." : "Register"}
        </button>

        <p>
          Already have an account?
          <Link to="/login" className="member-btn">
            Sign In
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
