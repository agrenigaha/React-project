/* eslint-disable no-unused-vars */
import { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Drawer,
  Button,
  IconButton,
  AppBar,
  Toolbar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "../ThemeContext";


import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();
const colorMode = useContext(ColorModeContext);
  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const background = theme.palette.background;
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  console.log({ open });
  // const navItems = ["Home", "About", "Projects", "Contact"];
  const navItems = [
    { label: "Home", icon: <HomeIcon />, link: "/" },
    { label: "About", icon: <PersonIcon />, link: "/about" },
    { label: "Skills", icon: <SettingsIcon />, link: "/skills" },
    { label: "Projects", icon: <AssignmentIcon />, link: "/projects" },
    { label: "Portfolio", icon: <BusinessCenterIcon />, link: "/portfolio" },
    { label: "News", icon: <NewspaperIcon />, link: "/news" },
    { label: "Contact", icon: <EmailIcon />, link: "/contact" },
  ];
  const handleNavClick = (link) => {
    navigate(link);
    setOpen(false);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const sidebar = (
    <Box
      sx={{
        width: {
          xs: 260,
          sm: 260,
          md: 200,
          lg: 220,
        },
        height: "100vh",
        bgcolor: primaryColor,
        color: secondaryColor,
        position: "fixed",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          color: secondaryColor,
          fontSize: {
            xs: "28px",
            sm: "30px",
            md: "30px",
            lg: "32px",
          },
          p: {
            xs: 2,
            sm: 3,
            md: 3,
          },
          fontFamily: "'Montserrit', sans-serif",
          fontWeight: 600,
          
        }}
      >
        Agreni
      </Typography>

      <List>
        {navItems.map((item) => {
          const isActive = location.pathname === item.link;
          return (
            <ListItem key={item.label}>
              <ListItemButton
                onClick={() => handleNavClick(item.link)}
                sx={{
                  py: {
                    xs: 1.8,
                    sm: 2,
                    md: 1.3,
                  },
                  px: {
                    xs: 2,
                    md: 1,
                  },
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: isActive ? 2000 : 2000,
                  color: isActive ? theme.palette.text.primary : secondaryColor,
                  transform: isActive ? "scale(1.15)" : "scale(1)",
                  transition: "all 0.25s ease, color 0.25s ease",

                  "&:hover": {
                    color: "black",
                    transform: "scale(1.08)",
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isActive ? theme.palette.text.primary: secondaryColor,
                    minWidth: {
                      xs: 42,
                      md: 36,
                    },
                    "& svg": {
                      fontSize: {
                        xs: 28,
                        sm: 26,
                        md: 22,
                      },
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Box
  sx={{
    display: "flex",
    justifyContent: "center",
    mb: 2,
  }}
>
  <IconButton
    onClick={colorMode.toggleColorMode}
    sx={{
      color: secondaryColor,
    }}
  >
    {theme.palette.mode === "light" ? (
      <DarkModeIcon />
    ) : (
      <LightModeIcon />
    )}
  </IconButton>
</Box>
      <Box
        sx={{
          mt: "auto",
          mb: {
            xs: 3,
            md: 6,
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontStyle: "'Montserrat', sans-serif",
            fontSize: {
              xs: 12,
              md: 14,
            },
            mb: 1,
            p: 3,
            mt: 1,
          }}
        >
          {new Date().getFullYear()} Agreni
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontStyle: "'Montserrat', sans-serif",
            mb: 1,
            p: 2,
            mt: 2,
          }}
        >
          Built with React & Material UI
        </Typography>
      </Box>
    </Box>
  );
  return (
    <>
      <AppBar
        
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          
          
          bgcolor: primaryColor,
          color: secondaryColor,
         
        }}
      >
        <Toolbar
        sx={{
          display:"flex",
          justifyContent:"space-between",
          minHeight:"56px",
          px:2,
        }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
  <IconButton
    onClick={colorMode.toggleColorMode}
    sx={{ color: secondaryColor }}
  >
    {theme.palette.mode === "light" ? (
      <DarkModeIcon />
    ) : (
      <LightModeIcon />
    )}
  </IconButton>

  <IconButton
    onClick={() => setOpen(true)}
    sx={{ color: secondaryColor }}
  >
    <MenuIcon />
  </IconButton>
</Box>
      </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 200,
          height: "100vh",
        }}
      >
        {sidebar}
      </Box>
      <Drawer
      anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
   
      >
        {sidebar}
      </Drawer>
    </>
  );
}
