import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import Home from '@/pages/Home';
import TestShadcn from '@/pages/TestShadcn';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/test',
    element: <TestShadcn />,
  },
];

export const router = createBrowserRouter(routes);
