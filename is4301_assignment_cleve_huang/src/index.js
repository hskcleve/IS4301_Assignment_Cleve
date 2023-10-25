import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="bg-white">
        <Home />
      </div>
    ),
  },
  {
    path: "/academics",
    element: (
      <div className="bg-white">
        <Academics />
      </div>
    ),
  },
  {
    path: "/admission",
    element: (
      <div className="bg-white">
        <Admission />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
