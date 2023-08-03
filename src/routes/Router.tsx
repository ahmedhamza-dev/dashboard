import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import {
  CssBaseline,
  PaletteMode,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useAppSelector } from "../redux/store";
import { themeSettings } from "../config/theme";
import Layout from "../pages/Layout";
import Dashboard from "../pages/Dashboard";
const Router = () => {
  const { mode } = useAppSelector((state) => state.mode);
  const theme = useMemo(
    () => createTheme(themeSettings(mode as PaletteMode)),
    [mode]
  );
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
            <Route element={<Layout />} >
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
