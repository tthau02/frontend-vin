import { createBrowserRouter, RouteObject } from "react-router-dom";
import ClientLayout from "@/layouts/client/ClientLayout";
import Home from "@/pages/Home";
import Register from "@/pages/auth/RegisterPage";
import Login from "@/pages/auth/LoginPage";
import ForgotPassword from "@/pages/auth/ForgotPasswordPage";
import ResetPassword from "@/pages/auth/ResetPasswordPage";
// import ErrorPage from "../errorPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
    ],
  },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
];

export const router = createBrowserRouter(routes);
