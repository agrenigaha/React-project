import { Box, Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import profile from "../assets/profile.jpeg";

export default function Home() {
  return (
    <Grid
      container
      spacing={{ xs: 2, sm: 3, md: 5 }}
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
        px: { xs: 3, md: 8 },
        py: { xs: 5, md: 0 },
      }}
    >
      <Grid
        size={{ xs: 12, md: 6 }}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: {
                xs: 230,
                sm: 280,
                md: 330,
                lg: 370,
              },
              height: {
                xs: 230,
                sm: 280,
                md: 330,
                lg: 370,
              },
              borderRadius: "50%",
              background: "primary.main",
              opacity: 0.2,
              top: 10,
              left: 10,
            }}
          />

          <Box
            component="img"
            src={profile}
            alt="Agreni"
            sx={{
              width: {
                xs: 220,
                sm: 270,
                md: 320,
                lg: 350,
              },
              height: {
                xs: 220,
                sm: 270,
                md: 320,
                lg: 350,
              },
              objectFit: "cover",
              borderRadius: "50%",
              position: "relative",
              zIndex: 1,
              border: "8px ",
              boxShadow: 8,
            }}
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            textAlign: { xs: "center", md: "left" },
            display: "flex",
            flexDirection: "column",
            justifyContent: { xs: "center", md: "flexstart" },
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="secondary"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: {
                xs: "2.2rem",
                sm: "3rem",
                md: "3.5rem",
                lg: "4rem",
              },
              
            }}
          >
            AGRENI GAHA
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: 1,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: {
                xs: "1.4rem",
                sm: "1.8rem",
                md: "2rem",
              },
            }}
          >
            Frontend Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontFamily: "'Poppins', sans-serif",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.4rem" },
              lineHeight: 1.8,
              maxWidth: 600,
            }}
          >
            Passionate frontend developer focused on building responsive,
            accessible, and modern web applications using React.js and Material
            UI.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: 2,
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
            }}
          >
            <IconButton
              href="https://github.com/agrenigaha"
              target="_blank"
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "secondary.main",
                  transform: "scale(1.2)",
                },
              }}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>

            <IconButton
              href="https://linkedin.com/in/agreni gaha"
              target="_blank"
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "secondary.main",
                  transform: "scale(1.2)",
                },
              }}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>

            <IconButton
              href="https://instagram.com/iaminactive____"
              target="_blank"
              sx={{
                color:" text.primary",
                "&:hover": {
                  color: "secondary.main",
                  transform: "scale(1.2)",
                },
              }}
            >
              <InstagramIcon fontSize="medium" />
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
