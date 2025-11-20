import type { RouteObject } from "react-router";

import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Listings from "../pages/Listings";
import Escrow from "../pages/Escrow";
import Systemlogs from "../pages/Systemlogs";
import DashboardLayout from "../layout/dashboardLayout";
import LandingPage from "../../auth/pages/LandingPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "users", element: <Users /> },
      { path: "listings", element: <Listings /> },
      { path: "escrow", element: <Escrow /> },
      { path: "systemlogs", element: <Systemlogs /> },
    ],
  },

  {
    path: "/LandingPage",
    element: <LandingPage />,
  },
];

export default routes;
