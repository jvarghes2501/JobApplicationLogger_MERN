import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAllJobsContext } from "../pages/AllJobs";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { FaFileDownload } from "react-icons/fa";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;

  const handleDownload = async () => {
    try {
      const response = await customFetch.get("/jobs/download", {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute(
        "download",
        `jobs_${new Date().toISOString().split("T")[0]}.xlsx`
      );
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      toast.success("Jobs downloaded successfully");
    } catch (error) {
      toast.error("Failed to download jobs");
      console.error(error);
    }
  };

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs-header">
        <h5>
          {jobs.length} job{jobs.length > 1 && "s"} found
        </h5>
        <button onClick={handleDownload} className="btn download-btn">
          <FaFileDownload /> Download Excel
        </button>
      </div>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
