import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {
  MdQueryStats,
  MdAddBox,
  MdWorkHistory,
  MdAdminPanelSettings,
} from "react-icons/md";
import Wrapper from "../wrappers/SmallSidebar";
import logo from "../images/logo.svg";
import { useDashboardContext } from "../../pages/DashboardLayout";

const SmallSideBar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  
  const links = [
    { id: 1, text: "Add Job", path: "add-job", icon: <MdAddBox /> },
    { id: 2, text: "All Jobs", path: "all-jobs", icon: <MdWorkHistory /> },
    { id: 3, text: "Stats", path: "stats", icon: <MdQueryStats /> },
    { id: 4, text: "Profile", path: "profile", icon: <MdAdminPanelSettings /> },
  ];

  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <img src={logo} alt="JobLogger" className="logo" />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { id, text, path, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={id}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  onClick={toggleSidebar}
                  end
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSideBar;
