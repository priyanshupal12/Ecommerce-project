import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFound from "./pages/NotFound";  
import Home from "./pages/Home";
import Men from "./pages/Men"
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import "./App.css";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "men",
          element: <Men />,
        },
        {
          path: "women",
          element: <Women />,
        },
        {
          path: "kids",
          element: <Kids />,
        },
        {
          path: "accessories",
          element: <Accessories />,
        }
      ]
    }
  ]
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

