// src/SellerDashboard/route/sellerDashboardRouter.tsx
import React from "react";
import SellerDashboardLayout from "../layout/sellerDashboardLayout";
import SellerDashboard from "../pages/sellerDashboard";
import MyListings from "../pages/Mylistings";
import Messages from "../pages/Messages";
import Escrow from "../pages/Escrow";
import Contracts from "../pages/Contracts";

const sellerDashboardRouter = [
  {
    path: "/seller",
    element: <SellerDashboardLayout />,
    children: [
      {
        path: "", // default page for /seller
        element: <SellerDashboard />,
      },
      {
        path: "mylistings",
        element: <MyListings />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "escrow",
        element: <Escrow />,
      },
      {
        path: "contracts",
        element: <Contracts />,
      },
    ],
  },
];

export default sellerDashboardRouter;
