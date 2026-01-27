import { useState, createContext, useContext } from "react";
import { Outlet, useLoaderData, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSideBar, SmallSideBar, NavBar } from "../assets/components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/current-user");
    return data;
  } catch (err) {
    redirect("/");
  }
};

const DashboardLayoutContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    try {
      navigate("/");
      await customFetch.get("/auth/logout");
      toast.success("Logged out successfully");
    } catch (err) {
      toast.error("Logout failed");
      return err;
    }
  };

  return (
    <DashboardLayoutContext.Provider
      value={{ showSidebar, toggleSidebar, user, logoutUser }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardLayoutContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useDashboardContext = () => useContext(DashboardLayoutContext);
export default DashboardLayout;
