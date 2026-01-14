import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../wrappers/Navbar";
import logo from "../images/logo.svg";
import { useDashboardContext } from "../../pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
const NavBar = () => {
  const { toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <div className="logo">
            <img src={logo} alt="JobLogger" />
          </div>
          <h4 className="logo-text">Dashboard</h4>
        </div>
        <LogoutContainer />
      </div>
    </Wrapper>
  );
};

export default NavBar;
