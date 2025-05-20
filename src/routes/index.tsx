import { createBrowserRouter, RouteObject } from "react-router-dom";
import ClientLayout from "@/layouts/client/ClientLayout";
import Home from "@/pages/Home";
import Login from "@/pages/auth/Login";
import ErrorPage from "@/pages/errorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
