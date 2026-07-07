import { useState } from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import data from "../data/portfolio.json";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(null);
  const [category, setCategory] = useState("All");

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography
          variant="h3"
          color="secondary"
          fontWeight="bold"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
          }}
        >
          Portfolio
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <Typography
            onClick={() => setCategory("All")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Popins', sans-serif",
              fontWeight: category === "All" ? "bold" : "normal",
            }}
          >
            All
          </Typography>
          <Typography
            onClick={() => setCategory("Food")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Popins', sans-serif",
              fontWeight: category === "Food" ? "bold" : "normal",
            }}
          >
            Food
          </Typography>
          <Typography
            onClick={() => setCategory("Nature")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Popins', sans-serif",
              fontWeight: category === "Nature" ? "bold" : "normal",
            }}
          >
            Nature
          </Typography>
          <Typography
            onClick={() => setCategory("Animal")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Popins', sans-serif",
              fontWeight: category === "Animal" ? "bold" : "normal",
            }}
          >
            Animal
          </Typography>
          <Typography
            onClick={() => setCategory("City")}
            sx={{
              cursor: "pointer",
              fontFamily: "'Popins', sans-serif",
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
              item
              md={6}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                onClick={() => setSelectedItem(item)}
                sx={{
                  width: 450,
                  maxWidth: "100%",
                  overflow: "hidden",
                  borderRadius: 6,
                  cursor: "pointer",
                  mx: "auto",
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  sx={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
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
            }}
          >
            <Box
              sx={{
                position: "relative",
                bgcolor: "background.default",
                p: 2,
                borderRadius: 2,
                width: 500,
                maxWidth: "90%",
                
                textAlign: "center",
               
              }}
            >
              <Box
                component="img"
                src={selectedItem.src}
                sx={{
                  width: "100%",
                  
                  height: 300,
                  
                  objectFit: "cover",
                  
                  borderRadius: 2,
                }}
              />
              {selectedItem?.description && (
                <Typography
                  sx={{
                    mt: 1,
                    lineHeight: 1.8,
                    fontFamily: "'Popins', sans-serif",
                    fontWeight: 600,
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
