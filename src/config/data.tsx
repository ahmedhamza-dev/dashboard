import React from 'react';

import {
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from '@mui/icons-material';
export const navItems = [
  {
    text: 'Main',
    path: 'Main',
    icon: <HomeOutlined />,
  },
  {
    text: 'Package',
    icon: null,
  },
  {
    text: 'Heal Package',
    path: 'HealPackage',
    icon: <ShoppingCartOutlined />,
  },
  {
    text: 'Customers',
    path: 'Customers',
    icon: <Groups2Outlined />,
  },
  {
    text: 'Transactions',
    path: 'Transactions',
    icon: <ReceiptLongOutlined />,
  },
  {
    text: 'Geography',
    path: 'Geography',
    icon: <PublicOutlined />,
  },
  {
    text: 'Sales',
    icon: null,
  },
  {
    text: 'Overview',
    path: 'Overview',
    icon: <PointOfSaleOutlined />,
  },
  {
    text: 'Daily',
    path: 'Daily',
    icon: <TodayOutlined />,
  },
  {
    text: 'Monthly',
    path: 'Monthly',
    icon: <CalendarMonthOutlined />,
  },
  {
    text: 'Breakdown',
    path: 'Breakdown',
    icon: <PieChartOutlined />,
  },
  {
    text: 'Management',
    icon: null,
  },
  {
    text: 'Admin',
    path: 'Admin',
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: 'Performance',
    path: 'Performance',
    icon: <TrendingUpOutlined />,
  },
];
