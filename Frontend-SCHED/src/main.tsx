import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Dashboard from "./Components/dashboard.tsx";
import Welcome from "./Components/Welcome.tsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/welcome",
    element: <Welcome />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
