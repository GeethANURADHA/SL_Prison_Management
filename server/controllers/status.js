import Medicine from "../models/Medicine.js";
import Food from "../models/Food.js";

//get all items from status

export const getStatus = async (req, res) => {
  try {
    const medicines = await Medicine.find();
    const foods = await Food.find();
    const Status = [...medicines, ...foods];
    res.status(200).json(Status[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
