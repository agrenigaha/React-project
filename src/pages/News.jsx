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
    <Box sx={{ py: 2 }}>
      <Typography
        variant="h3"
        color="secondary"
        textAlign="center"
        sx={{
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 900,
        }}
      >
        LATEST NEWS
      </Typography>

      <Grid container spacing={4}>
        {news.map((item) => (
          <Grid size={{ md: 6 }} key={item.id}>
            <Card
              elevation={5}
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                transition: "0.3s",
                mt: 4,
              }}
            >
              <CardMedia
                component="img"
                height="240"
                image={item.image}
                alt={item.title}
              />

              <Typography variant="body2" color="secondary.main" sx={{  p: 2 ,fontFamily: "'Popins', sans-serif", fontWeight: 600 }}>
                By {item.author} . {item.source} . {item.date}
              </Typography>

              <Typography variant="h6" fontWeight={700} sx={{ p: 2, fontFamily: "'Popins', sans-serif" ,fontWeight: 600 }}>
                {item.title}
              </Typography>

              <Typography variant="body2" color="secondary.main" sx={{  p: 2, fontFamily: "'Popins', sans-serif", fontWeight: 600 }}>
                {item.description.substring(0, 100)}...
              </Typography>

              <Button
                
                color="secondary"
                sx={{ mt: 3 }}
                onClick={() => setSelectedNews(item)}
              >
                Read More
              </Button>
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
          }}
        >
          <Card
            sx={{
              width: 650,
              maxWidth: "90%",
              position: "relative",
              borderRadius: 4,
            }}
          >
            <IconButton
              onClick={() => setSelectedNews(null)}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 1,
                color: "#fff",
              }}
            >
              <CloseIcon />
            </IconButton>
            <CardMedia
              component="img"
              image={selectedNews.image}
              alt={selectedNews.title}
              height="300"
            />

            <CardContent>
              <Typography variant="h5" fontFamily="'Popins', sans-serif" fontWeight="800">
                {selectedNews.title}
              </Typography>

              <Typography sx={{ mt: 2, fontFamily: "'Popins', sans-serif", fontWeight: 600 }} color="secondary" lineHeight={1.8}>
                {selectedNews.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
