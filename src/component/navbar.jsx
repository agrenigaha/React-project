import {useState} from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar() {
  const navItems = ["Home", "About", "Projects", "Contact"];

  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="sticky" sx={{ backgroundColor: "black" }}
    >
      <Toolbar >
      <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="profile"
            sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>    
        
                          <Typography variant="h6" component="div" sx={{ fontWeight: "bold",flexGrow: 1 }}>
          Agreni
        </Typography>

      
     <Box sx={{ display: "flex" }}>

      {/* Home */}
      <Button
        startIcon={<HomeIcon />}
        sx={{
          color: "white",
          marginLeft: "15px",
          textTransform: "none",
          fontSize: "20px",
          "&:hover": { color: "blue" },
        }}
      >
        Home
      </Button>

       {/* About */}
      <Button
        startIcon={<InfoIcon />}
        sx={{
          color: "white",
          marginLeft: "15px",
          textTransform: "none",
          fontSize: "20px",
          "&:hover": { color: "blue" },
        }}
      >
        About
      </Button>
 {/* Projects */}
      <Button
        startIcon={<WorkIcon />}
        sx={{
          color: "white",
          marginLeft: "15px",
          textTransform: "none",
          fontSize: "20px",
          "&:hover": { color: "blue" },
        }}
      >
        Projects
      </Button>

      {/* Contact */}
      <Button
        startIcon={<EmailIcon />}
        sx={{
          color: "white",
          marginLeft: "15px",
          textTransform: "none",
          fontSize: "20px",
          "&:hover": { color: "blue" },
        }}
      >
        Contact
      </Button>

      </Box>

      </Toolbar>
    </AppBar>
    </Box>
  );
};