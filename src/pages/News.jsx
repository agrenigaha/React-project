import {
  Box,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const news = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2018/05/16/20/30/post-it-3406962_1280.jpg",
    author: "Agreni",
    date: "02 July 2026",
    title: "Building My React Portfolio with Material UI",
    description: `I have been working on building my React portfolio using Material UI.
     This project allows me to showcase my skills, projects, and achievements in a
      visually appealing and interactive way. By leveraging the capabilities of
       Material UI, I can create a professional and engaging portfolio that stands out.`,    
  },
  {
    id: 2,
    image:
      "https://cdn.pixabay.com/photo/2024/05/21/19/57/computer-8779036_1280.jpg",
    author: "Agreni",
    date: "30 June 2026",
    title: "Learning Responsive Design Using Grid and Flexbox",
    description: `I have been learning how to create responsive layouts using
     CSS Grid and Flexbox. These powerful layout techniques allow me to build
      flexible and adaptive designs that work well on different screen sizes and 
      devices. By mastering Grid and Flexbox, I can create modern web applications 
      that provide a great user experience across all platforms.`,
  },
  {
    id: 3,
    image:
      "https://cdn.pixabay.com/photo/2018/08/28/11/45/code-3637299_1280.jpg",
    author: "Agreni",
    date: "28 June 2026",
    title: "Creating a Modern Portfolio with React and MUI",
    description: `I have been working on building a modern portfolio website
     using React and Material UI (MUI). This project allows me to showcase my skills,
      projects, and achievements in a visually appealing and interactive way. By leveraging
      the capabilities of MUI, I can create a professional and engaging portfolio that stands out.`,
  },
];

export default function News() {
  return (
    <Box sx={{ py: 8 }}>
      <Typography
        variant="h3"
        color="secondary"
        textAlign="center"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
        }}
      >
        My latest learning updates and portfolio progress.
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

              <CardContent sx={{ p: 3 }}>
                <Typography variant="body2" color="secondary.main">
                  By {item.author} | {item.date}
                </Typography>

                <Typography variant="h6" fontWeight={700} sx={{ mt: 3 }}>
                  {item.title}
                </Typography>

                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                  {item.description}
                </Typography>

                
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
