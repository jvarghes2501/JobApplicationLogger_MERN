import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  ErrorPage,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
  EditJob,
} from "./pages";

import { action as registerAction } from "./pages/Register.jsx";
import { action as loginAction } from "./pages/Login.jsx";
import { action as addJobAction } from "./pages/AddJob.jsx";
import { loader as dashboardLoader } from "./pages/DashboardLayout.jsx";
import { loader as allJobsLoader } from "./pages/AllJobs.jsx";
import {
  loader as editJobLoader,
  action as editJobAction,
} from "./pages/EditJob.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },

      {
        path: "register",
        element: <Register />,
        action: registerAction,
      },
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />,
            action: addJobAction,
          },
          {
            path: "stats",
            element: <Stats />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
            loader: allJobsLoader,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "edit-job/:id",
            element: <EditJob />,
            loader: editJobLoader,
            action: editJobAction,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
