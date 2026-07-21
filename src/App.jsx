import { useMemo, useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";

import Navbar from "./component/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Contact from "./pages/Contact";

import getTheme from "./theme";
import { ColorModeContext } from "./ThemeContext";

export default function App() {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
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
            minHeight: "100vh",
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
              p: {
                xs: 2,
                sm: 3,
                md: 4,
                lg: 5,
              },
              overflowX: "hidden",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
