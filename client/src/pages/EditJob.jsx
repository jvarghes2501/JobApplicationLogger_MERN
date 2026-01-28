import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData, useNavigation } from "react-router-dom";
import { JOB_STATUS, JOB_TYPES } from "../utils/constants";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to load job");
    return redirect("/dashboard/all-jobs");
  }
};

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch(`/jobs/${params.id}`, data);
    toast.success("Job updated successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to update job");
    return error;
  }
};

const EditJob = () => {
  const { job } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Edit Job</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="company"
            labelText="Company"
            defaultValue={job.company}
          />
          <FormRow
            type="text"
            name="title"
            labelText="Position"
            defaultValue={job.title}
          />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            defaultValue={job.jobLocation}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="Job Status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="Job Type"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPES)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Saving Changes..." : "Save Changes"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
