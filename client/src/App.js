import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import LogIn from "./login/staff/index.jsx";
import Layout from "scenes/staffscences/layout";
import DashboardStaff from "scenes/staffscences/dashboard";
import Staffs from "scenes/staffscences/staffs/index.jsx";
import AddStaffs from "scenes/staffscences/staffs/AddStaff.jsx";
import EditStaff from "scenes/staffscences/staffs/EditStaff";
import ResignationStaff from "scenes/staffscences/staffs/ResignationStaff";
import AddAttendance from "scenes/staffscences/staffs/AddAttendance";
import RequireAuth from "middleware/staff/RequireAuth.js";
import RedirectIfAuthenticated from "middleware/staff/RedirectedIfAuthenticated.js";

function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route
              path="/"
              element={<RedirectIfAuthenticated Component={LogIn} />}
            />
            <Route element={<RequireAuth Component={Layout} />}>
              <Route path="/staff dashboard" element={<DashboardStaff />} />
              <Route path="/Display  Staff Details" element={<Staffs />} />
              <Route path="/Add Staff Member" element={<AddStaffs />} />
              <Route path="/Edit/:_id" element={<EditStaff />} />
              <Route path="/Resignation/:_id" element={<ResignationStaff />} />
              <Route path="/Discard" element={<Staffs />} />
              <Route
                path="/staff attendance/:_id"
                element={<AddAttendance />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
