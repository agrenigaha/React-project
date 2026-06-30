import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Collapse,
  Button,
} from "@mui/material";

const services = [
  {
    title: "Frontend Development",
    description: `I specialize in building modern, responsive, and user-friendly web applications 
    using HTML, CSS, JavaScript, React.js, and Material UI. I focus on writing clean, reusable, 
    and maintainable code that delivers a smooth user experience across different devices and browsers.
    I enjoy transforming ideas and designs into interactive websites that are both visually appealing
     and functional. My goal is to create applications that are fast, accessible, and easy to use while
      following modern frontend development best practices.`,
  },
  {
    title: "Responsive Design",
    description: `Create websites that work perfectly on all screen sizes.I design and develop websites 
    that adapt seamlessly to desktops, tablets, and mobile devices. By using CSS Flexbox, Grid, media 
    queries, and Material UI's responsive components, I ensure that every page looks great regardless of screen size.
    I believe responsiveness is an essential part of modern web development because it improves accessibility,
     usability, and the overall user experience for visitors on any device.`,
  },
  {
    title: "UI Development",
    description: `Design clean and user-friendly interfaces with Material UI.I build reusable
     React components and develop interactive single-page applications with React Router and Material UI.
      I also enjoy creating clean user interfaces with consistent typography, color palettes, and layouts 
      that enhance the overall look and feel of a website.As I continue learning, I focus on improving my 
      React skills, exploring new frontend technologies, and applying best practices to every project I create.`,
  },
];

export default function Skills() {
  const [open, setOpen] = useState(null);

  const handleToggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" fontWeight="bold" mb={4}>
        What I Do
      </Typography>

      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                p: 2,
                borderRadius: 3,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {service.title}
                </Typography>

                <Typography mt={2}>
                  {service.description.slice(0, 80)}...
                </Typography>

                <Collapse in={open === index}>
                  <Typography mt={2} sx={{ lineHeight: 1.8 }}>
                    {service.description}
                  </Typography>
                </Collapse>

                <Button sx={{ mt: 2 }} onClick={() => handleToggle(index)}>
                  {open === index ? "Show Less" : "Read More"}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
