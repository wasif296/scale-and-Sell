import type { RouteObject } from "react-router";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layout/authLayout";
import LandingPage from "../pages/LandingPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default routes;
