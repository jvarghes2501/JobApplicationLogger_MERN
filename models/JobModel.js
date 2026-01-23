import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPES } from "../utils/constant.js";
const jobSchema = new mongoose.Schema({
  company: String,
  title: String,
  jobStatus: {
    type: String,
    enum: Object.values(JOB_STATUS),
    default: JOB_STATUS.APPLIED,
  },
  jobType: {
    type: String,
    enum: Object.values(JOB_TYPES),
    default: JOB_TYPES.ENGINEERING,
  },
  jobLocation: String,
  createdDate: { type: Date, default: Date.now },
});
export default mongoose.model("Job", jobSchema);
