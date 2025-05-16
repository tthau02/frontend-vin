import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ClientLayout from "@/components/layouts/client/ClientLayout";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
