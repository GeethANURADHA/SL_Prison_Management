//import Jail from "../models/Jail.js";
import Jailing from "../models/Jailing.js";
import Category from "../models/Category.js";
import Psychologist from "../models/Psychologist.js";

//get all available jails

export const getJails = async (req, res) => {
  try {
    const jailing = await Jailing.find();
    const Jails = [...Jailing];
    res.status(200).json(Jails);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/////////////////////////////////////////////////////

//get all jails

export const getJailing = async (req, res) => {
  try {
    const jailing = await Jailing.find();
    res.status(200).json(jailing);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

///////////////////////////////////////////////////

// get jail by id

export const getJailingById = async (req, res) => {
  try {
    const jailing = await Jailing.findById(req.params.id);
    res.json(jailing);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

///////////////////////////////////////////////////////

// add a jail

export const saveJailing = async (req, res) => {
  const jailing = new Jailing(req.body);
  try {
    const insertedjailing = await jailing.save();
    res.status(201).json(insertedjailing);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};

////////////////////////////////////////////////////////

//update a jail

export const updateJailing = async (req, res) => {
  try {
    const updatedjailing = await Jailing.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedjailing);
  }catch (error) {
    res.status(400).json({ message: error.message });
  }
};

///////////////////////////////////////////////////////////

//get all categories

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

///////////////////////////////////////////////////////

// add a category

export const saveCategories = async (req, res) => {
  const categories = new Category(req.body);
  try {
    const insertedcategories = await categories.save();
    res.status(201).json(insertedcategories);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/////////////////////////////////////////////////////

//get all psychologist details

export const getPsychologist = async (req, res) => {
  try {
    const psychologists = await Psychologist.find();
    res.status(200).json(psychologists);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/////////////////////////////////////////////////////

//get psychologist by Id

export const getPsychologistById = async (req, res) => {
  try {
    const psychologists = await Psychologist.findById(req.params.id);
    res.json(psychologists);
  }catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//////////////////////////////////////////////////////

//add a psychologist

export const savePsychologist = async (req, res) => {
  const psychologist = new Psychologist(req.body);
  try {
    const insertedpsychologist = await psychologist.save();
    res.status(201).json(insertedpsychologist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

///////////////////////////////////////////////////

//update a psychologist

export const updatePsychologist = async (req, res) => {
  try {
    const updatedpsychologist = await Psychologist.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatedpsychologist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

////////////////////////////////////////////////////////

//delete a psychologist

export const deletePsychologist = async (req, res) => {
  try {
    const deletedpsychologist = await Psychologist.deleteOne({ _id: req.params.id });
    res.status(200).json(deletedpsychologist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

