import express from "express";
import {
  authcheck,
  loginAccount,
  logoutAccount,
  registerAccount,
} from "../controllers/auth/auth.con";
import { authenticate } from "../middlewares/isAuth";

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post("/register", registerAccount);
router.post("/login", loginAccount);
router.post("/logout", authenticate, logoutAccount);
router.get("/authCheck", authenticate, authcheck);

export default router;
