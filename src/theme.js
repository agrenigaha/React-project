import { createTheme } from "@mui/material/styles";

const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
   primary: {
    main: "#1A1A1A", 
  },

  secondary: {
    main: "#D4AF37", 
  },

  background: {
    default: mode === "light" ? "#FAFAF8" : "#121212",
    paper: mode === "light" ? "#FFFFFF" : "#1E1E1E",
  },

  text: {
    primary: mode === "light" ? "#1A1A1A" : "#F5F5F5",
    secondary: mode === "light" ? "#6B7280" : "#CFCFCF",
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
4
export default getTheme;
