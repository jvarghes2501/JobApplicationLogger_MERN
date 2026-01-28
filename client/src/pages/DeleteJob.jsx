import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to delete job");
  }
  return redirect("/dashboard/all-jobs");
};

const DeleteJob = () => {
  return <h1>Delete Job</h1>;
};

export default DeleteJob;
