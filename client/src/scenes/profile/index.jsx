import React, { useState, useEffect } from "react";
import axios from "axios";
import { TextField, Button, useTheme, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Profile = () => {
    const [fullname, setFullName] = useState("");
    const [nic, setNic] = useState("");
    const [dateofbirth, setDateOfBirth] = useState("");
    const [sex, setSex] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("");
    const [dateofincarceration, setDateOfIncarceration] = useState("");
    const [releasedate, setReleaseDate] = useState("");
    const [addimage, setAddImage] = useState("");
    const theme = useTheme();
    const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPrisonersById();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPrisonersById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5001/prisoner/prisoners/${id}`
      );
      console.log(response.data); // check if data is being fetched correctly
      setFullName(response.data.fullname);
      setNic(response.data.nic);
      setDateOfBirth(new Date(response.data.dateofbirth).toISOString().substr(0, 10));
      setSex(response.data.sex);
      setAddress(response.data.address);
      setCategory(response.data.category);
      setDateOfIncarceration(response.data.dateofincarceration);
      setReleaseDate(response.data.releasedate);
      setAddImage(response.data.addimage);
    } catch (error) {
      console.log(error);
    }
  };

  const updatePrisoner = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5001/prisoner/Prisoners/${id}`, {
        fullname,
        nic,
        dateofbirth,
        sex,
        address,
        category,
        dateofincarceration,
        releasedate,
        addimage,
      });
      navigate("/listprisoners");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m="2.5rem 10.5rem">
      <div className="columns mt-5">
        <div className="column is-half">
          <h1>Prisoner Profile</h1>
          <br></br>
          <form onSubmit={updatePrisoner}>
          <TextField
              label="Full Name"
              variant="outlined"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="full name"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
            />
            <TextField
              label="NIC"
              variant="outlined"
              value={nic}
              onChange={(e) => setNic(e.target.value)}
              placeholder="nic"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
            />
            <TextField
              label="Date Of Birth"
              variant="outlined"
              value={dateofbirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              placeholder="date of birth"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
              type="date"
              InputLabelProps={{
                shrink: true,
                
              }}
            />
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">sex</InputLabel>
            <Select
              label="Sex"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
              placeholder="sex"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
            >
              <MenuItem value={"Male"}>Male</MenuItem>
              <MenuItem value={"Female"}>Female</MenuItem>
            </Select>
          </FormControl>

            <TextField
              label="Address"
              variant="outlined"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="address"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
            />

<FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="category type"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
            >
              <MenuItem value={"Murder"}>Murder</MenuItem>
              <MenuItem value={"Robbery"}>Robbery</MenuItem>
              <MenuItem value={"Drug"}>Drug</MenuItem>
              <MenuItem value={"Violence"}>Violence</MenuItem>
              <MenuItem value={"Society"}>Society</MenuItem>
              <MenuItem value={"Shoplifting"}>Shoplifting</MenuItem>
            </Select>
          </FormControl>

            <TextField
              label="Date Of Incarceration"
              variant="outlined"
              value={dateofincarceration}
              onChange={(e) => setDateOfIncarceration(e.target.value)}
              placeholder="date of incarceration"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Release Date"
              variant="outlined"
              value={releasedate}
              onChange={(e) => setReleaseDate(e.target.value)}
              placeholder="release date"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />

            <TextField
              label="Add Image"
              variant="outlined"
              value={addimage}
              onChange={(e) => setAddImage(e.target.value)}
              placeholder="add image"
              fullWidth
              margin="normal"
              required
              inputProps={
                { readOnly: true, }
            }
            />

            <br></br>
            <br></br>
            <Button
              sx={{
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                float: "right",
              }}
              type="submit"
              variant="contained"
              color="primary"
            >
              Released from Prison
            </Button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default Profile;