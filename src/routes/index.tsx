import { createBrowserRouter, RouteObject } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import Register from "@/pages/auth/RegisterPage";
import Login from "@/pages/auth/LoginPage";
import ForgotPassword from "@/pages/auth/ForgotPasswordPage";
import ResetPassword from "@/pages/auth/ResetPasswordPage";
import ErrorPage from "@/pages/errorPage";
import ClientLayout from "@/components/layouts/client/ClientLayout";
import OtpPage from "@/pages/auth/OtpPage";
import ChatInterface from "@/pages/chatPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "verify-otp", element: <OtpPage /> },
      { path: "forgot-password", element: <ForgotPassword /> },
      { path: "reset-password", element: <ResetPassword /> },
      { path: "chat", element: <ChatInterface /> },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export const router = createBrowserRouter(routes);
