import { Box, Stack } from "@mui/material";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Register from "./page/Register"
import Login from "./page/Login"
import Homepage from "./page/Homepage";
import HalamanPosting from "./components/buatPostingan/HalamanPosting";
import HalamanProfil from "./page/profile";
import Catatan from "./components/catatan";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/halamanProfil",
    element: <HalamanProfil/>,
  },
  {
    path: "/halamanPosting",
    element: <HalamanPosting/>,
  },
  {
    path: "/catatan",
    element: <Catatan/>
  }
]);

function App () {
    return (
      <RouterProvider router={router} />
    );
  };

export default App;
