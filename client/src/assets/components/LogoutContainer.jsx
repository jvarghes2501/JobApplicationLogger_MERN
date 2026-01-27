import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useState } from "react";
import Wrapper from "../wrappers/LogoutContainer";
import { useDashboardContext } from "../../pages/DashboardLayout";

const LogoutContainer = () => {
  const { user, logoutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <Wrapper>
      <div className="btn-container">
        <button
          type="button"
          className="btn"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUserCircle />
          {user?.name || "User"}
          <FaCaretDown />
        </button>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <button type="button" className="dropdown-btn" onClick={logoutUser}>
            Logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
