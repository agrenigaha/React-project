// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Navbar from "./component/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Contact from "./pages/Contact";
import { Box } from "@mui/material";
export default function App() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr", 
          sm:"1fr",       
          md: "200px 1fr",  
          lg:"220px 1fr",
        },
        minHeight: "100vh",
      }}
    >
      <Navbar />
          <Box
          component="main"
           sx={{
            width:"100%",
            minWidth: 0,
             p: {xs:2,
              sm:3,
              md:4,
              ls:5,
             },
             overflowX:"hidden",
             }}
           >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/projects" element={<Projects />} />
         <Route path="/portfolio" element={<Portfolio/>}/>
         <Route path="/news" element={<News/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    
    </Box>
    </Box>
  );
}
