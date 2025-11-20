import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import RouterProvider from "./router/Router";
import ThemeProvider from "./theme/themeProvider";

import { AuthProvider } from "./auth/context/AuthContext";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
