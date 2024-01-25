import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },

    ],
  },
]);

export default router;
