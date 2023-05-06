import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import LogIn from "./login/jail/index.jsx";
import Layout from "scenes/scenes_jail/layout";
import DashboardJail from "scenes/scenes_jail/dashboardJail/index.jsx";

import Jails from "scenes/scenes_jail/jails";
import Jailing from "scenes/scenes_jail/jailing/index.jsx";
import Category from "scenes/scenes_jail/category";
import AddJailing from "scenes/scenes_jail/jailing/AddJailing.jsx";
import EditJailing from "scenes/scenes_jail/jailing/EditJailing.jsx";
import AddCategory from "scenes/scenes_jail/category/AddCategory.jsx";
import Psychologist from "scenes/scenes_jail/psychologist";
import AddPsychologist from "scenes/scenes_jail/psychologist/AddPsychologist.jsx";
import EditPsychologist from "scenes/scenes_jail/psychologist/EditPsychologist.jsx";
import Situation from "scenes/scenes_jail/situation/index.jsx";

import RequireAuth from "middleware/jail/RequireAuth.js";
import RedirectIfAuthenticated from "middleware/jail/RedirectedIfAuthenticated.js";

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
              <Route path="jail dashboard" element={<DashboardJail />} /> 
              
              <Route path="/jails" element={<Jails />} />
              <Route path="/jailing" element={<Jailing />} />
              <Route path="/category" element={<Category />} />
              <Route path="/psychologist" element={<Psychologist />} />
              <Route path="/addJailing" element={<AddJailing />} />
              <Route path="/editJailing/:id" element={<EditJailing />} />
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/addPsycholo" element={<AddPsychologist />} />
              <Route path="/editPsycholo/:id" element={<EditPsychologist />} />
              <Route path="/situation" element={<Situation />} />

            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
