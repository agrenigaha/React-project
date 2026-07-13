import { useState } from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import data from "../data/portfolio.json";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState("All");

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
            flexDirection: {
      xs: "column",
      md: "row",
    },
          justifyContent: {
             xs: "flex-start",
      md: "space-between",
          },
          alignItems: { xs: "flex-start", md: "center" },
          mb: 4,
          gap: {
            xs:3,
            md:0,
          },
        }}
      >
        <Typography
          variant="h3"
          color="secondary"
          fontWeight="bold"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            fontSize: {
              xs: "2.2rem",
              sm: "2.8rem",
              md: "3.5rem",
            },
            textAlign: {
              xs: "left",
              md: "left",
            },
            mt:{xs:7,
              md:0,},
          }}
        >
          Portfolio
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
               xs: "flex-start",
      md: "center"
            },
            gap: {
                 xs: 2,
      sm: 3,
      md: 4,
  
            },
              width: {
      xs: "100%",
      md: "auto",
    },
    mb: {
      xs: 0,
      md: 6,
    },
            flexWrap: "wrap",
          }}
        >
          <Typography
            onClick={() => setCategory("All")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: category === "All" ? "bold" : "normal",
            
            textAlign: {
              xs: "center",
              md: "left",
            },
            }}
          >
            All
          </Typography>
          <Typography
            onClick={() => setCategory("Food")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: category === "Food" ? "bold" : "normal",
            }}
          >
            Food
          </Typography>
          <Typography
            onClick={() => setCategory("Nature")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: category === "Nature" ? "bold" : "normal",
            }}
          >
            Nature
          </Typography>
          <Typography
            onClick={() => setCategory("Animal")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: category === "Animal" ? "bold" : "normal",
            }}
          >
            Animal
          </Typography>
          <Typography
            onClick={() => setCategory("City")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: category === "City" ? "bold" : "normal",
            }}
          >
            City
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {data
          .filter((item) => category === "All" || item.title === category)
          .map((item) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 4,
              }}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                onClick={() => setSelectedItem(item)}
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  transition: ".3s",
                  overflow: "hidden",
                  borderRadius: 6,
                  cursor: "pointer",
                  mx: "auto",
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  sx={{
                    width: "100%",
                    height: {
                      xs: 220,
                      sm: 260,
                      md: 300,
                    },
                    objectFit: "cover",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: 8,
                    },
                  }}
                />
              </Box>
            </Grid>
          ))}
        {selectedItem && (
          <Box
            sx={{
              position: "fixed",
              inset: 0,

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
              "&:hover": {
                transform: "translateY(-8px)",
              },
            }}
          >
            <Box
              sx={{
                position: "relative",
                bgcolor: "background.default",
                p: 2,
                borderRadius: 2,
                width: {
                  xs: "95%",
                  sm: 450,
                  md: 600,
                },
                maxHeight: "90vh",
                overflow: "auto",

                textAlign: "center",
                "&:hover": {
                  transform: "translateY(-8px)",
                },
              }}
            >
              <Box
                component="img"
                src={selectedItem.src}
                sx={{
                  width: "100%",

                  height: {
                    xs: 220,
                    sm: 280,
                    md: 300,
                  },

                  objectFit: "cover",

                  borderRadius: 2,
                  "&:hover": {
                    transform: "translateY(-8px)",
                  },
                }}
              />
              {selectedItem?.description && (
                <Typography
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: {
                      xs: ".95rem",
                      md: "1rem",
                    },
                    color: "black",
                  }}
                >
                  {selectedItem.description}
                </Typography>
              )}

              <IconButton
                onClick={() => setSelectedItem(null)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  color: "#fff",
                }}
              >
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        )}
      </Grid>
    </Box>
  );
}
