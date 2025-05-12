import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";
import ClientLayout from "@/components/layouts/client/ClientLayout";
import Home from "@/pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [{ index: true, element: <Home /> }],
  },
];

export const router = createBrowserRouter(routes);
