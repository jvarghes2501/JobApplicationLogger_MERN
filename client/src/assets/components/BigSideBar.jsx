import { NavLink } from "react-router-dom";
import {
  MdQueryStats,
  MdAddBox,
  MdWorkHistory,
  MdAdminPanelSettings,
} from "react-icons/md";
import Wrapper from "../wrappers/BigSidebar";
import logo from "../images/logo.svg";
import { useDashboardContext } from "../../pages/DashboardLayout";

const BigSideBar = () => {
  const { showSidebar } = useDashboardContext();

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
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
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

export default BigSideBar;
