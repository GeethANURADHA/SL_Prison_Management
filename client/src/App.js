import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import LogIn from "./login/prisoner/index.jsx";
import Layout from "scenes/scenes_prisoner/layout";
import Dashboard from "scenes/scenes_prisoner/prisonerDashboard";
import ListofallPrisoners from "scenes/scenes_prisoner/listPrisoners/index.jsx";
import AddPrisoners from "scenes/scenes_prisoner/addPrisoners/index.jsx";
import Status from "scenes/scenes_prisoner/statusPrisoner/index.jsx";
import UpdatePrisoner from "scenes/scenes_prisoner/updatePrisoner/index.jsx";
import Profile from "scenes/scenes_prisoner/profile/index.jsx";
import RequireAuth from "middleware/prisoner/RequireAuth.js";
import RedirectIfAuthenticated from "middleware/prisoner/RedirectedIfAuthenticated.js";



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
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/listPrisoners" element={<ListofallPrisoners />} />
              <Route path="/addPrisoners" element={<AddPrisoners />} />
              <Route path="/status" element={<Status />} />
              <Route path="/updatePrisoner/:id" element={<UpdatePrisoner />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
