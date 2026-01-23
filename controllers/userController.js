import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import Job from "../models/JobModel.js";

export const getCurrentUser = async (req, res) => {
  const user = (await User.findById(req.user.userId)).toJSON();
  res.status(StatusCodes.OK).json({ user });
};

export const getAppStats = async (req, res) => {
  const userCount = await User.countDocuments();
  const jobCount = await Job.countDocuments();
  // You can add more stats as needed

  res.status(StatusCodes.OK).json({ userCount, jobCount });
};

export const updateUserProfile = async (req, res) => {
  const obj = { ...req.body };
  delete obj.password;
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, obj);
  res.status(StatusCodes.OK).json({ msg: "update user profile" });
};
