import { FaSuitcaseRolling } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";
import Wrapper from "../assets/wrappers/StatsContainer";
import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { StatCard } from "../components";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async () => {
  try {
    const { data } = await customFetch.get("/users/admin/app-stats");
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Access denied - Admin only");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { userCount, jobCount } = useLoaderData();

  return (
    <Wrapper>
      <StatCard
        count={userCount}
        title="Total Users"
        icon={<HiUsers />}
        color="#6366f1"
        bcg="#e0e7ff"
      />
      <StatCard
        count={jobCount}
        title="Total Jobs"
        icon={<FaSuitcaseRolling />}
        color="#f59e0b"
        bcg="#fef3c7"
      />
    </Wrapper>
  );
};

export default Admin;
