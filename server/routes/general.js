import express from "express";
import { logout, postLogin, test } from "../controllers/auth.js";
import ensureAuth from "../middleware/auth.js";
import { getUser, getprisonerDashboardStats } from "../controllers/general.js";

const router = express.Router();

router.post("/login", postLogin);
router.get("/test", test);
router.get("/logout", logout);
router.get("/user/:id", getUser);
router.get("/dashboard", ensureAuth, getprisonerDashboardStats);

export default router;
