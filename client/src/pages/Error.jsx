import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import notFound from "../assets/images/not-found.svg";

const Error = () => {
  const error = useRouteError();

  if (error?.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFound} alt="not found" />
          <h3>Oops! Page Not Found</h3>
          <p>
            The page you're looking for seems to have wandered off. Don't worry,
            your job applications are still safe!
          </p>
          <Link to="/dashboard" className="btn">
            Back to Dashboard
          </Link>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div>
        <div className="error-icon">⚠️</div>
        <h3>Something Went Wrong</h3>
        <p>
          We encountered an unexpected error. Please try again or contact support
          if the problem persists.
        </p>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
