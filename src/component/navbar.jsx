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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const theme = useTheme();

  const primaryColor = theme.palette.primary.main;
  const secondaryColor = theme.palette.secondary.main;
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  console.log({ open });
  // const navItems = ["Home", "About", "Projects", "Contact"];
  const navItems = [
    { label: "Home", icon: <HomeIcon />, link: "/" },
    { label: "About", icon: <InfoIcon />, link: "/about" },
    { label: "Projects", icon: <WorkIcon />, link: "/projects" },
    { label: "Contact", icon: <EmailIcon />, link: "/contact" },
  ];
  const handleNavClick = (link) => {
    navigate(link);
  };
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const sidebar = (
    <Box
      sx={{
        width: 200,
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
          fontSize: "30px",
          p: 3,
          fontFamily: "'Poppins', sans-serif",
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
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: secondaryColor,
                  "&:hover": {
                    color: "black",
                  },
                }}
              >
                <ListItemIcon sx={{ color: secondaryColor }}>
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
          mt: "auto",
          mb: 8,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontStyle: "'Montserrat', sans-serif",
            mb: 1,
            p: 3,
            mt: 1,
          }}
        >
          {new Date().getFullYear()} Agreni
        </Typography>
      </Box>
    </Box>
  );
  return (
    <>
      <IconButton
        onClick={() => setOpen(true)}
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: 10,
          left: 10,
          zIndex: 1200,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: 200,
          height: "100vh",
        }}
      >
        {sidebar}
      </Box>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {sidebar}
      </Drawer>
    </>
  );
}
