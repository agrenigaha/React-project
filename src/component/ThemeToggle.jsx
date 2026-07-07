import { useContext } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ColorModeContext } from "../ThemeContext";

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useContext(ColorModeContext);

  return (
    <IconButton onClick={toggleColorMode}>
      {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
}