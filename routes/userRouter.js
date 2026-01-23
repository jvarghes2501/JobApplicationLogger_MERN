import { Router } from "express";
import {
  getCurrentUser,
  getAppStats,
  updateUserProfile,
} from "../controllers/userController.js";
import { validateUpdateProfileInput } from "../middleware/validationMiddleware.js";
import { authorizePermissions } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", authorizePermissions("admin"), getAppStats);
router.patch("/update-user", validateUpdateProfileInput, updateUserProfile);
export default router;
