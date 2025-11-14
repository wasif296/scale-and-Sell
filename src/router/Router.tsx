import React from "react";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

import authRouter from "../auth/route/authRouter";
import dashboardRouter from "../dashboard/route/dashboardRouter";
import investorDashboardRouter from "../InvestorDashboard/route/investorDashboardRouter";

const router = createBrowserRouter([
  ...authRouter,
  ...dashboardRouter,
  ...investorDashboardRouter,
]
  );

const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
