import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useMemo } from 'react';
import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { useAppSelector } from '../redux/store';
import { themeSettings } from '../config/theme';
import Layout from '../pages/Layout';
import Dashboard from '../pages/Dashboard';
import HealPackage from '../pages/HealPackage';
import CreateProduct from '../pages/HealPackage/Create';
const Router = () => {
  const { mode } = useAppSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode as PaletteMode)), [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard/main' />} />
          <Route path='dashboard' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='main' element={<Dashboard />} />
            <Route path='healPackage' element={<HealPackage />}></Route>
            <Route path='healPackage/create' element={<CreateProduct />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
