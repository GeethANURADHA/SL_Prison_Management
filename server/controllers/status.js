import Prisoner from "../models/prisonerModel.js";


//get all items from status

export const getstatusPrisoner = async (req, res) => {
  try {
    const prisoner = await Prisoner.aggregate([
      { $group: { _id: "$category", category: { $addToSet: "$category"}, count: { $sum: 1 } } },
      { $project: { _id: 0 } }
   ]).sort({category : 1});
    res.status(200).json(prisoner);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
