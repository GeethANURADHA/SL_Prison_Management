import  express  from "express";
import { getStaffs , saveStaff , getStaffById, updateStaff ,deleteStaff, saveAttendance,AttendanceSubmit } from "../controllers/client.js";

const router = express.Router();

router.get("/staffs",getStaffs);
router.post("/staffs",saveStaff);
router.get("/staffs/:id",getStaffById)
router.patch("/staffs/:id",updateStaff)
router.delete("/staffs/:id", deleteStaff);


//attendance form
router.get("/staffs/:id",getStaffById);
router.post("/attendances", saveAttendance);
router.post("/attendances", AttendanceSubmit);

export default router;