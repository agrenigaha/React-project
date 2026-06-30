import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

export default function Projects() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: 6,
        py: 6,
      }}
    >
      <Typography
        variant="h2"
        color="secondary"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
          mb: 2,
        }}
      >
        PROJECTS
      </Typography>

      <Grid container justifyContent="center">
        <Grid size={8}>
          <Card
            sx={{
              boxShadow: 4,
              borderRadius: 3,
              p: 2,
            }}
          >
            <CardContent>
              <Typography
                variant="h4"
                fontWeight="bold"
                mb={2}
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                }}
              >
                Movie Booking System
              </Typography>

              <Typography variant="subtitle1" color="black" mb={2}>
                HTML • CSS • JavaScript
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Developed a front-end Movie Booking System as a college minor
                project using HTML, CSS, and JavaScript. The system allows users
                to browse Nepali movies, view show timings, select preferred
                seats, and simulate the ticket booking process through a
                responsive and user-friendly interface.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Key features include movie listings with posters, login/signup
                interfaces, seat selection, show schedules, location-based
                filtering, and responsive design. The project focuses on
                promoting Nepali cinema while providing users with a modern
                online booking experience.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
