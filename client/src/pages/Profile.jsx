import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

// eslint-disable-next-line react-refresh/only-export-components
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.patch("/users/update-user", data);
    toast.success("Profile updated successfully");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg || "Failed to update profile");
    return error;
  }
};

const Profile = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Profile</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="name"
            labelText="First Name"
            defaultValue={user.name}
          />
          <FormRow
            type="text"
            name="lastName"
            labelText="Last Name"
            defaultValue={user.lastName}
          />
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            defaultValue={user.email}
          />
          <FormRow
            type="text"
            name="location"
            labelText="Location"
            defaultValue={user.location}
          />
          <button
            type="submit"
            className="btn btn-block form-btn"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Save Changes"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
