import Medicine from "../models/Medicine.js";
import Food from "../models/Food.js";

//get all items from inventories

export const getInventories = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    const foods = await Food.find();
    const Inventory = [...medicines, ...foods];
    res.status(200).json(Inventory);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/***************************************************************************************************** */

//get all items from medicines

export const getMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.status(200).json(medicines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get medicine by id

export const getMedicinesById = async (req, res) => {
  try {
    const medicines = await Medicine.findById(req.params.id);
    res.json(medicines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// add medicine items

export const saveMedicines = async (req, res) => {
  const medicines = new Medicine(req.body);
  try {
    const insertedmedicines = await medicines.save();
    res.status(201).json(insertedmedicines);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update medicine items

export const updateMedicines = async (req, res) => {
  try {
    const updatedmedicines = await Medicine.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedmedicines);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete medicine items

export const deleteMedicines = async (req, res) => {
  try {
    const deletedmedicines = await Medicine.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedmedicines);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/***************************************************************************************** */

//get all items from foods

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.status(200).json(foods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// get food by id

export const getFoodsById = async (req, res) => {
  try {
    const foods = await Food.findById(req.params.id);
    res.json(foods);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// add food items

export const saveFoods = async (req, res) => {
  const foods = new Food(req.body);
  try {
    const insertedfoods = await foods.save();
    res.status(201).json(insertedfoods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//update food items

export const updateFoods = async (req, res) => {
  try {
    const updatedfoods = await Food.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedfoods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete food items

export const deleteFoods = async (req, res) => {
  try {
    const deletedfoods = await Food.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedfoods);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
