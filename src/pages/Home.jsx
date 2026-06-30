import { Box, Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import profile from "../assets/profile.jpeg";
export default function Home() {
  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        alignItems: "center",
      }}
    >
          <Grid
        size={6 }
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={profile}
          alt="Agreni"
          sx={{
            width: 350,
            height: 350,
            objectFit: "cover",
            borderRadius: "50%",
            boxShadow: 8,
          }}
        />
      </Grid>
      <Grid size={ 6 }>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            color="secondary"
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
            }}
          >
            AGRENI GAHA
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: 1,
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 700,
            }}
          >
            Frontend Developer
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontSize: "1.3rem",
              lineHeight: 1.8,
              maxWidth: 550,
            }}
          >
            Passionate frontend developer focused on building responsive,
            accessible, and modern web applications using React.js and Material
            UI.
          </Typography>
          <Box>
            <IconButton
              href="https://github.com/agrenigaha"
              target="_blank"
              sx={{
                color: "black",
              }}
            >
              <GitHubIcon fontSize="medium" />
            </IconButton>

            <IconButton
              href="https://linkedin.com/in/agreni gaha"
              target="_blank"
              sx={{
                color: "black",
              }}
            >
              <LinkedInIcon fontSize="medium" />
            </IconButton>

            <IconButton
              href="https://instagram.com/iaminactive____"
              target="_blank"
              sx={{
                color: "black",
              }}
            >
              <InstagramIcon fontSize="medium" />
            </IconButton>
            <IconButton
              sx={{
                color: "secondary",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            ></IconButton>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
