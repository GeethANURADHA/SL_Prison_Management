import express from "express";
import {

  getJails,
  getCategories,
  saveCategories,
  getPsychologist,
  getPsychologistById,
  savePsychologist,
  updatePsychologist,
  deletePsychologist,
  saveJailing,
  updateJailing,
  getJailing,
  getJailingById,

} from "../controllers/client.js";

const router = express.Router();

router.get("/jails", getJails);

router.get("/jailings", getJailing);
router.get("/jailings/:id", getJailingById);
router.post("/jailings", saveJailing);
router.patch("/jailings/:id", updateJailing);

router.get("/categories", getCategories);
router.post("/categories", saveCategories);

router.get("/psychologists", getPsychologist);
router.get("/psychologists/:id", getPsychologistById);
router.post("/psychologists", savePsychologist);
router.patch("/psychologists/:id", updatePsychologist);
router.delete("/psychologists/:id", deletePsychologist);

export default router;
