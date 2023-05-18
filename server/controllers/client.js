import Staff from "../models/Staff.js";
import Attendance from "../models/Attendance.js";


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

//delete 

export const  deleteStaff = async (req, res) => {
  try {
    const deletestafffs = await Staff.deleteOne({ _id: req.params.id });
    res.status(200).json(deletestafffs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//add attendance
 export const AttendanceSubmit = async (req, res) => {
  const attendances = new Attendance(req.body);
   try {
     const insertedStaffAttendance = await attendances.save();
     res.status(201).json(insertedStaffAttendance);
   } catch (error) {
    res.status(400).json({ message: error.message });
  }
 };


export const saveAttendance = async(req, res) => {
  const attendances = new Attendance(req.body);
  try {
    const insertedAttendances = await attendances.save();
    res.status(201).json(insertedAttendances);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  //get all attendance
 export const getAllAttendances = async (req, res) => {
  try {
    const attendances = await Attendance.find();
    res.status(200).json(attendances);
    } catch (error) {
    res.status(400).json({ message: error});
    }
  };