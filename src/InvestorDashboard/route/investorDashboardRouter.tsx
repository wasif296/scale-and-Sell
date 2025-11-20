import React from "react";
import type { RouteObject } from "react-router-dom";

// Layout
import InvestorDashboardLayout from "../layout/investorDashboardLayout";
import InvestorDashboard from "../pages/investorDashboard";
import Explore from "../pages/Explore";
import Messages from "../pages/Messages";
import Portfolio from "../pages/Portfolio";

// Pages

const investorDashboardRouter: RouteObject[] = [
  {
    path: "/investor-dashboard",
    element: <InvestorDashboardLayout />,
    children: [
      { path: "dashboard", element: <InvestorDashboard /> },
      { path: "explore", element: <Explore /> },
      { path: "messages", element: <Messages /> },
      { path: "portfolio", element: <Portfolio /> },
    ],
  },
];

export default investorDashboardRouter;
