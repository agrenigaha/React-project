import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F5b7bd",
    },
    secondary: {
      main: "#5b0f18",
    },
    background: {
      default: "#fff",
      
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

export default theme;
