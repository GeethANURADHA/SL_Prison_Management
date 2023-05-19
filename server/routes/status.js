import express from "express";
import {

getstatusPrisoner,

} from "../controllers/status.js";

const router = express.Router();

router.get("/status", getstatusPrisoner);

export default router;
