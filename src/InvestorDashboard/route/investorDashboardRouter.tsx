import React from "react";

import InvestorDashboardLayout from "../layout/investorDashboardLayout";
import investorDashboard from "../pages/investorDashboard";
import type { RouteObject } from "react-router-dom";

const investorDashboardRouter: RouteObject[] = [
  {
    path: "/investor-dashboard",
    element: <InvestorDashboardLayout />,
    children: [
      { path: "dashboard", element: <investorDashboard /> },
      
    ],
  },
];

export default investorDashboardRouter;
