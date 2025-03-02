import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFound from "./pages/NotFound";  
import Home from "./pages/Home";
import Men from "./pages/Men"
import Women from "./pages/Women";
import Accessories from "./pages/Accessories";
import "./App.css";
import Contact from "./pages/Contact";


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
          path: "Women",
          element: <Women />,
        },
        {
          path: "accessories",
          element: <Accessories />,
        },
        {
          path: "contact",
          element: <Contact />,
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

