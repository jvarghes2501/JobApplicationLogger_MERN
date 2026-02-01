import { Router } from "express";
import {
  getAllJobs,
  createJob,
  getJobById,
  editJobById,
  deleteJobById,
  showStats,
  downloadJobsAsExcel,
} from "../controllers/jobController.js";

import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
const router = Router();

router.route("/stats").get(showStats);
router.route("/download").get(downloadJobsAsExcel);
router.route("/").get(getAllJobs).post(validateJobInput, createJob);

router
  .route("/:id")
  .get(validateIdParam, getJobById)
  .patch(validateIdParam, validateJobInput, editJobById)
  .delete(validateIdParam, deleteJobById);

export default router;
