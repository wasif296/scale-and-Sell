// src/router/Router.tsx
import React from "react";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

import authRouter from "../auth/route/authRouter";
import dashboardRouter from "../dashboard/route/dashboardRouter";
import InvestorDashboardRouter from "../InvestorDashboard/route/InvestorDashboardRouter";
import SellerDashboardRouter from "../SellerDashboard/route/sellerDashboardRouter";
// import SellerDashboardRouter from "../SellerDashboard/route/SellerDashboardRouter";

const router = createBrowserRouter([
  ...authRouter,
  ...dashboardRouter,
  ...InvestorDashboardRouter,
  ...SellerDashboardRouter,
]);

const RouterProvider: React.FC = () => {
  return <ReactRouterProvider router={router} />;
};

export default RouterProvider;
