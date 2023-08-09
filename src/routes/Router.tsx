import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import React, { useMemo } from 'react';
import { CssBaseline, PaletteMode, ThemeProvider, createTheme } from '@mui/material';
import { useAppSelector } from '../redux/store';
import { themeSettings } from '../config/theme';
import Layout from '../pages/Dashboard/Layout';
import Dashboard from '../pages/Dashboard';
import HealPackage from '../pages/Dashboard/HealPackage';
import CreateProduct from '../pages/Dashboard/HealPackage/Create';
import Category from '../pages/Dashboard/Category';
import CreateCategory from '../pages/Dashboard/Category/Create';
import { ToastContainer } from 'react-toastify';

const Router = () => {
  const { mode } = useAppSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode as PaletteMode)), [mode]);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
      <ToastContainer />
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Navigate to='/dashboard/main' />} />
          <Route path='dashboard' element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path='main' element={<Dashboard />} />
            <Route path='healPackage' element={<HealPackage />} />
            <Route path='healPackage/create' element={<CreateProduct />} />
            <Route path='category' element={<Category />}>
            </Route>
              <Route path='category/create' element={<CreateCategory />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
