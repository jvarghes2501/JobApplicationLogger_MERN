import { Router } from "express";
import {
  getAllJobs,
  createJob,
  getJobById,
  editJobById,
  deleteJobById,
} from "../controllers/jobController.js";
const router = Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJobById).patch(editJobById).delete(deleteJobById);

export default router;
