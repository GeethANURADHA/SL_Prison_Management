import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, Button, useTheme, Box ,Select ,MenuItem } from "@mui/material";



const AddStaff = () => {
  const [sname,setName]=useState("");
  const [NIC,setNIC]=useState("");
  const [Email,setEmail]=useState("");
  const [designation,setdesignation]=useState("");
  const [Birthday,setBirthday]=useState("");
  const [Gender,setGender]=useState("Male");
  const [Address,setAddress]=useState("");
  const [BasicSalary,setBasicSalary]=useState("");
  const [PhoneNumber,setPhoneNumber]=useState("");
  const [StaffName,setStaffName]=useState("");
  const navigate=useNavigate();

  const theme = useTheme();

  const saveStaff = async(e)=>{
    e.preventDefault();
    try{
      await axios.post('http://localhost:5001/client/staffs/', {
        sname,
        NIC,
        Email,
        designation,
        Birthday,
        Gender,
        Address,
        BasicSalary,
        PhoneNumber,
        StaffName,
        
      });
       navigate("/")
    }catch(error){
      console.log(error);
    }
  }
  const staffNames = ['John', 'Mary', 'Jane'];
  
  return (
    //react form?

    
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={saveStaff}>

        <Box m="2.5rem 10.5rem">

        
            <TextField
              label="Name"
              variant="outlined"
              value={sname} 
              onChange={(e)=>setName(e.target.value)}
              placeholder="Name"
              fullWidth
              margin="normal"
              required
            />
          
          
            <TextField
              label="NIC"
              variant="outlined"
              value={NIC} 
              onChange={(e)=>setNIC(e.target.value)}
              placeholder="NIC"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              variant="outlined"
              value={Email} 
              onChange={(e)=>setEmail(e.target.value)} 
              placeholder="Email"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Designation"
              variant="outlined"
              value={designation} 
              onChange={(e)=>setdesignation(e.target.value)} 
              placeholder="Designation"
              fullWidth
              margin="normal"
              required
            />
            
            <TextField
              label="Date of Birth"
              variant="outlined"
              type="Date"
              value={Birthday} 
              onChange={(e)=>setBirthday(e.target.value)}
              fullWidth
              margin="normal"
              required
              InputLabelProps={{
                shrink:true,
              }}
            />
        <div className="field">
          <label className="lable">Gender</label>
          <div className="control">
            <div className="select  is-fullwidth">
              <select             value={Gender} 
            onChange={(e)=>setGender(e.target.value)}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
             <TextField
              label="Address"
              variant="outlined"
              value={Address} 
              onChange={(e)=>setAddress(e.target.value)}
              placeholder="Address"
              fullWidth
              margin="normal"
              required
             />
            <TextField
              label="Basic Salary"
              variant="outlined"
              value={BasicSalary} 
              onChange={(e)=>setBasicSalary(e.target.value)}
              placeholder="Basic Salary"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Phone Number"
              variant="outlined"
              value={PhoneNumber} 
              onChange={(e)=>setPhoneNumber(e.target.value)}
              placeholder="Phone Number"
              fullWidth
              margin="normal"
              required
            />
      

            <Select
               
               variant="outlined"
               id="staff-name-select"
               value={StaffName}
               onChange={(e)=>setStaffName(e.target.value)}
               fullWidth
              
               displayEmpty
               margin="normal"
               required
             >
             <MenuItem value="" disabled>
              Select Staff Name
             </MenuItem>
             {staffNames.map((staffName) => (
             <MenuItem key={staffName} value={staffName}>
             {staffName}
             </MenuItem>
              ))}
             </Select>

        <div className="field">
          <div className="control">
            <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              float: "right",
            }}
            variant="contained"
            color="primary"

            type="submit" className="button is-success">Save</Button>
          </div>
        </div>
        </Box>
        </form>
        
      </div>
    </div>
    
  )
}

export default AddStaff;