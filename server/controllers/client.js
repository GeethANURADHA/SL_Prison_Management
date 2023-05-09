import Staff from "../models/Staff.js";


export const getStaffs = async (req , res) =>{
  
  try{
    const staffs = await Staff.find();
    res.status(200).json(staffs);
  }catch(error){
    res.status(404).json({message: error.message});
  }
};


export const getStaffById = async (req, res) => {
  try {
    const staffs = await Staff.findById(req.params.id);
    res.json(staffs);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const saveStaff = async (req, res) => {
    const staffs = new Staff(req.body);
    try {
      const insertStaff = await staffs.save();
      res.status(201).json(insertStaff);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //update 

export const updateStaff = async (req, res) => {
  try {
    const updatestaff = await Staff.updateOne (
      { _id: req.params.id },
      { $set: req.body }
    );
    res.status(200).json(updatestaff);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//delete medicine items

export const  deleteStaff = async (req, res) => {
  try {
    const deletestafffs = await Staff.deleteOne({ _id: req.params.id });
    res.status(200).json(deletestafffs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
