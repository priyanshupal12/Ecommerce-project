import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import NotFound from "./pages/NotFound";  
import Home from "./pages/Home";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import Contact from "./pages/Contact";
import Register from "./Validation/Register";
import ProtectedRoute from "./Validation/ProtectedRoute";  // Import ProtectedRoute
import "./App.css";
import Login from "./Validation/LoginRoute";
import TokenProvider from "./Validation/TokenProvider";


// Create the router
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "/",
          element: <ProtectedRoute element={<Home />} />,  // Protect Home route
        },
        {
          path: "men",
          element: <ProtectedRoute element={<Men />} />,  // Protect Men route
        },
        {
          path: "women",
          element: <ProtectedRoute element={<Women />} />,
        },
        {
          path: "kids",
          element: <ProtectedRoute element={<Kids />} />,
        },
        {
          path: "accessories",
          element: <ProtectedRoute element={<Accessories />} />,
        },
        {
          path: "contact",
          element: <ProtectedRoute element={<Contact />} />,
        },
      ]
    },
    {
      path: "login",  // Login route for users not logged in
      element: <Login />,
    },
    {
      path: "register",  // Register route for new users
      element: <Register />,
    },
  ]
);

function App() {
  return (
    <TokenProvider>  {/* Wrap the application with TokenProvider */}
      <RouterProvider router={router} />
    </TokenProvider>
  );
}

export default App;
