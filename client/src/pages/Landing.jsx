import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg"; // You'll need to add an image
import logo from "../assets/images/logo.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <div className="logo">
          <img src={logo} alt="JobLogger" className="logo-icon" />
          <h3>
            Job<span>Logger</span>
          </h3>
        </div>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Take control of your job search journey. JobLogger helps you
            organize and track all your job applications in one place. Monitor
            interview stages, set reminders, and never miss an opportunity
            again.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
