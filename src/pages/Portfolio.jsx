import { useState } from "react";
import { Grid, Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const data = [
  {
    id: 0,
    title: "Food",
    url: "https://cdn.pixabay.com/photo/2023/12/30/14/21/coffee-8478202_1280.jpg",
  },
  {
    id: 1,
    title: "Nature",
    url: "https://cdn.pixabay.com/photo/2021/10/15/09/42/farmers-6711562_1280.jpg",
  },
  {
    id: 2,
    title: "Nature",
    url: "https://cdn.pixabay.com/photo/2026/02/02/20/52/black-and-white-10101586_1280.jpg",
  },
  {
    id: 3,
    title: "Animal",
    url: "https://cdn.pixabay.com/photo/2022/02/17/20/37/dog-7019418_1280.jpg",
  },
  {
    id: 4,
    title: "Nature",
    url: "https://cdn.pixabay.com/photo/2020/05/01/17/40/trees-5118309_1280.png",
  },
  {
    id: 5,
    title: "City",
    url: "https://cdn.pixabay.com/photo/2026/04/22/07/41/07-41-15-443_1280.jpg",
  },
];

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [category, setCategory]= useState("All");

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
        <Typography variant="h3" color="secondary" fontWeight="bold"
         sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
            }}>
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
               fontFamily: "'Montserrat', sans-serif",
              fontWeight: category==="All"?"bold":"normal",
            }}
          >
            All
          </Typography>
          <Typography
          onClick={() => setCategory("Food")}
            sx={{
              cursor: "pointer",
               fontFamily: "'Montserrat', sans-serif",
              fontWeight: category==="Food"?"bold":"normal",
            }}
          >
            Food
          </Typography>
          <Typography
          onClick={() => setCategory("Nature")}
            sx={{
              cursor: "pointer",
               fontFamily: "'Montserrat', sans-serif",
             fontWeight: category==="Nature"?"bold":"normal",
            }}
          >
            Nature
          </Typography>
          <Typography
          onClick={() => setCategory("Animal")}
            sx={{
              cursor: "pointer",
               fontFamily: "'Montserrat', sans-serif",
              fontWeight: category==="Animal"?"bold":"normal",
            }}
          >
            Animal
          </Typography>
          <Typography
          onClick={() => setCategory("City")}
            sx={{
              cursor: "pointer",
               fontFamily: "'Montserrat', sans-serif",
              fontWeight: category==="City"?"bold":"normal",
            }}
          >
            City
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {data
        .filter(
            (item)=> category ==="All"|| item.title === category
        )
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
              onClick={() => setSelectedImage(item.url)}
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
                src={item.url}
                sx={{
                  width: "100%",
                  height: 300,
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        ))}
        {selectedImage && (
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
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                tabSize: "large",
              }}
            >
              <Box
                component="img"
                src={selectedImage}
                sx={{
                  width: 350,
                  maxWidth: "100%",
                  height: "auto",
                  maxHeight: 300,
                  objectFit: "contain",
                  display: "block",
                  mx: "auto",
                  borderRadius: 2,
                }}
              />

              <IconButton
                onClick={() => setSelectedImage(null)}
                sx={{
                  position: "absolute",
                  top: 10,
                  right: 10,

                  "&:hover": {
                    bgcolor: "#fff",
                    mx: "auto",
                  },
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
