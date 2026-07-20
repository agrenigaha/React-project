import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#F5b7bd",
      },
      secondary: {
        main: "#5b0f18",
      },
      background: {
        default: mode === "light" ? "#FFEDED" : "#1A1A1B",
        paper: mode === "light" ? "#ffffff" : "#3a171d",
      },
      text: {
        primary: mode === "light" ? "#000000" : "#f8e8ea",
        secondary: mode === "light" ? "#5b0f18" : "#f5b7bd",
      },
    },
    typography: {
      fontFamily: "Montserrat, sans-serif",
      h4: {
        fontWeight: 700,
      },
      body1: {
        fontSize: "1rem",
      },
    },
  });

export default getTheme;
