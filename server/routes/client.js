import express from "express";
import {
  deleteFoods,
  deleteMedicines,
  getFoods,
  getInventories,
  getMedicines,
  getMedicinesById,
  saveFoods,
  saveMedicines,
  updateFoods,
  updateMedicines,
  getFoodsById,
} from "../controllers/client.js";

const router = express.Router();

router.get("/inventories", getInventories);

router.get("/medicines", getMedicines);
router.get("/medicines/:id", getMedicinesById);
router.post("/medicines", saveMedicines);
router.patch("/medicines/:id", updateMedicines);
router.delete("/medicines/:id", deleteMedicines);

router.get("/foods", getFoods);
router.get("/foods/:id", getFoodsById);
router.post("/foods", saveFoods);
router.patch("/foods/:id", updateFoods);
router.delete("/foods/:id", deleteFoods);

export default router;
