import React,{useState} from 'react';
import { Box, Button, useTheme ,TextField } from "@mui/material";
import { useGetStaffsQuery } from "state/api";
import Header from "components/componentsStaff/Header";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';





const Staffs = (

) => {
    const theme = useTheme();
    const { data, isLoading} = useGetStaffsQuery();
    const [searchValue, setSearchValue] = useState("");
    console.log("data",data);

    //For sear option
  const filteredData = data?.filter((item) =>
  item.sname.toLowerCase().includes(searchValue.toLowerCase())
  
);

const handleSearch = (event) => {
  setSearchValue(event.target.value);
};

    const columns = [
      {
        field: "_id",
        headerName: "ID",
        flex: 1,
      },
      {
        field: "sname",
        headerName: "Name",
        flex: 1,
      },
      {
        field: "NIC",
        headerName: "NIC",
        flex: 1,
      },
      {
        field: "Email",
        headerName: "Email",
        flex: 1,
      },
      {
        field: "PhoneNumber",
        headerName: "Phone Number",
        flex: 1,
      },
      {
        field: "designation",
        headerName: "Designation",
        flex: 1,
      },
      {
        field: "StaffName",
        headerName: "Staff Name",
        flex: 1,
      },



      {
        headerName: "Activity",
        flex: 1,
        renderCell: (params) => {
          const { id } = params.row; // assuming your row data has an "id" property
          return (
            
            <div>
              <Link to={`/Edit/${params.row._id}`}
                              variant="contained"
                color="secondary">
              <Button
                variant="contained"
                color="secondary"
                href={`/Edit/${params.row._id}`}
              >
                Edit
              </Button>

              </Link>
              {" "}
              <tb></tb>
              <tb></tb>
              <tb></tb>
              <Button
                variant="contained"
                color="error"
                href={`/Resignation/${params.row._id}`}
               // onClick={() => deleteMedicines(params.row._id)}
              >
                Resignation
              </Button>
            </div>
          );
        },
      },


    ]







  return (
    
    <Box m="1.5rem 2.5rem">
      <Header title="Display Staff Details" subtitle="List of all Staffs" />
      <Box Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !important`,
          },
        }}>
      <Box mb={2}>
          <TextField
            id="search"
            label="Search by item name"
            variant="outlined"
            value={searchValue}
            onChange={handleSearch}
            fullWidth
          />
        </Box>

        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={filteredData || []}
          columns={columns}
        />
      </Box>
    </Box>

  )
};

export default Staffs;