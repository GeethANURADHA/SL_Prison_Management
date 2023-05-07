import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout";
import Dashboard from "scenes/dashboard";
import ListofallPrisoners from "scenes/listPrisoners/index.jsx";
import AddPrisoners from "scenes/addPrisoners/index.jsx";
import Status from "scenes/status/index.jsx";
import UpdatePrisoner from "scenes/updatePrisoner/index.jsx";



function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/listPrisoners" element={<ListofallPrisoners />} />
              <Route path="/addPrisoners" element={<AddPrisoners />} />
              <Route path="/status" element={<Status />} />
              <Route path="/updatePrisoner/:id" element={<UpdatePrisoner />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
