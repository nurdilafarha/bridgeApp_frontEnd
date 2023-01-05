import { Box, Stack } from "@mui/material";
import { createBrowserRouter, RouterProvider, Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";

import Register from "./page/Register"
import Login from "./page/Login"
import Homepage from "./page/Homepage";
import HalamanPosting from "./components/buatPostingan/HalamanPosting";
import HalamanProfil from "./page/profile";
import Catatan from "./components/catatan";
import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App () {
  const { user } = useContext(AuthContext);
    return (
      <Router>
        <Routes>
            <Route path="/" element={user ? <Homepage /> : <Register />} />
            <Route path="/login" element={user ? <Navigate replace to = "/" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate replace to = "/" /> : <Register />} />
            <Route path="/profile/:username" element={<HalamanProfil />} />
            <Route path="/halamanPosting" element={<HalamanPosting />} />
        </Routes>
      </Router>
    );
  };

export default App;
