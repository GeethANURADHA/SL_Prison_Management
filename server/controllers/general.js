import User from "../models/user.js";

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
   
    /* Recent Transactions */
    const status = await Status.find()
      .limit(50)
      .sort({ createdOn: -1 });

    
    res.status(200).json({
      status
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
