// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Navbar from "./component/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";
export default function App() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",        
          md: "200px 1fr",  
        },
        minHeight: "100vh",
      }}
    >
      <Navbar />
          <Box
           sx={{
             p: 3,
              ml: { xs: 0, md: "200px" },
             }}
           >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    
    </Box>
    </Box>
  );
}
