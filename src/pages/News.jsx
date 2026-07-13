import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Button,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

import news from "../data/news";
export default function News() {
  const [selectedNews, setSelectedNews] = useState(null);
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Typography
        variant="h3"
        color="secondary"
        textAlign="center"
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
          mb: 5,
          fontSize: {
            xs: "2rem",
            sm: "2.5rem",
            md: "3.5rem",
          },
          mt:{xs:7,
              md:0,},
        }}
      >
        LATEST NEWS
      </Typography>

      <Grid container spacing={4}>
        {news.map((item) => (
          <Grid size={{ xs: 12, sm: 6, md: 6 }} key={item.id}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                boxShadow: 5,
                transition: "0.4s",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 12,
                },
              }}
            >
              <Box
                sx={{
                  overflow: "hidden",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: {
                      xs: 180,
                      sm: 220,
                      md: 240,
                    },
                    objectFit: "cover",
                    transition: "0.5s",
                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />
              </Box>
              <CardContent>
                <Typography
                  variant="body2"
                  color="secondary.main"
                  sx={{
                    p: 2,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  By {item.author} . {item.source} . {item.date}
                </Typography>

                <Typography
                  variant="h5"
                  fontWeight={700}
                  sx={{
                    mt: 2,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: "1.2rem", md: "1.5rem" },
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="secondary.main"
                  sx={{
                    p: 2,
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: { xs: "o.9rem", md: "1rem" },
                  }}
                >
                  {item.description.substring(0, 100)}...
                </Typography>

                <Button
                  color="secondary"
                  sx={{
                    mt: 3,
                    borderRadius: 5,
                    px: 4,
                    fontWeight: 700,
                    maxwidth: 180,
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                  onClick={() => setSelectedNews(item)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedNews && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
            p: 2,
          }}
        >
          <Card
            sx={{
              width: { xs: "95%", sm: 500, md: 650 },
              maxWidth: "95%",

              position: "relative",
              borderRadius: 5,
              overflow: "hidden",
            }}
          >
            <IconButton
              onClick={() => setSelectedNews(null)}
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                bgcolor: "rgba(0,0,0,.5)",
                color: "white",
                "&:hover": {
                  bgcolor: "white",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <CardMedia
              component="img"
              height="320"
              image={selectedNews.image}
              alt={selectedNews.title}
              sx={{
                height: {
                  xs: 200,
                  sm: 280,
                  md: 320,
                },
                objectFit: "cover",
              }}
            />

            <CardContent>
              <Typography
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: {
                    xs: "1.5rem",
                    md: "2rem",
                  },
                }}
              >
                {selectedNews.title}
              </Typography>

              <Typography
                sx={{
                  mt: 3,
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: {
                    xs: "0.95rem",
                    md: "1.1rem",
                  },
                }}
                color="secondary"
                lineHeight={1.8}
              >
                {selectedNews.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
