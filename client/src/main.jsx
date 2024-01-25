import ReactDom from "react-dom/client";
import React from "react";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider from the appropriate module
import "./index.css";
import router from "./Router/Router";

ReactDom.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
