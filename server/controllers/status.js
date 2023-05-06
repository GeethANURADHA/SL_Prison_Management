import Prisoner from "../models/prisonerModel.js";


//get all items from status

export const getStatus = async (req, res) => {
  try {
    const prisoner = await Prisoner.find();
    const Status = [...prisoner];
    res.status(200).json(Status[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
