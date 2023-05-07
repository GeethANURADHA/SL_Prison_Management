import Psychologist from "../models/Psychologist.js";
import Category from "../models/Category.js";
//import Jailing from "../models/Jailing.js";

//get all items from status

// export const getSituation = async (req, res) => {
//   try {
//     const categories = await Category.aggregate([
//       { $group: { _id: "$category", category: { $addToSet: "$category"}, status: { $sum: 2} } },
//       { $project: { _id: 0} }
//     ]).sort({category : 1});
//     res.status(200).json(categories[0]);
//     const psychologists = await Psychologist.aggregate([
//       { $group: { _id: "$role", role: { $addToSet: "$category"}, name: { $sum: 2} } },
//       { $project: { _id: 0} }
//     ]).sort({category : 1});
//     res.status(200).json(psychologists[0]);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

export const getSituation = async (req, res) => {
  try {
    const categories = await Category.find();
    const psychologists = await Food.find();
    const Situation = [...categories, ...psychologists];
    res.status(200).json(Situation[0]);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};