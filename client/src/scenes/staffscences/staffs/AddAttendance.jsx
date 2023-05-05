import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, useTheme, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetStaffsQuery } from "state/api";

const AttendanceForm = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState('present');
  const [error, setError] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();
  const { refetch } = useGetStaffsQuery();
  const { _id } = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/attendance', {
        member_id: _id,
        name,
        status,
        date: new Date(),
      });
      console.log(response.data);
      // show success message to user
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };


 


  return (
    <div className="columns">
      <div className="column is-half">
        <form onSubmit={handleSubmit}>
          <Box m="2.5rem 10.5rem">
            <TextField
              label="Staff ID"
              variant="outlined"
              value={_id}
              onChange={(e) => setId(e.target.value)}
              placeholder="Staff ID"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Status"
              variant="outlined"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status"
              fullWidth
              margin="normal"
              required
            />
            <Button
              sx={{
                backgroundColor: theme.palette.grey[300],
                color: theme.palette.background.alt,
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                float: "right",
              }}
              type="submit"
              variant="contained"
              color="primary"
              href={`/Discard`}
            >
              Add
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
};

export default AttendanceForm;
