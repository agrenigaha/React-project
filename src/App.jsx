import { useMemo } from "react";
import { useSelector } from "react-redux";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route , useLocation } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Contact from "./pages/Contact";

import getTheme from "./theme";

export default function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => getTheme(mode), [mode]);
  const location =useLocation();
  const home = location.pathname==="/";

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr",
            md: "200px 1fr",
            lg: "220px 1fr",
          },
        
          height: home ? "100vh" : "auto",
          overflow: home ? "hidden" : "visible",

          bgcolor: "background.default",
          color: "text.primary",
        }}
      >
        <Navbar />

        <Box
          component="main"
          sx={{
            width: "100%",
            minWidth: 0,
            overflow: home ? "hidden" : "auto",
            height: home ? "100vh" : "auto",

            p: {
              xs: 2,
              sm: 3,
              md: 4,
              lg: 5,
            },
            
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
        
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
