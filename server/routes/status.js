import express from "express";
import {

  getStatus,

} from "../controllers/status.js";

const router = express.Router();

router.get("/status", getStatus);

export default router;
