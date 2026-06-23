import { Box, Typography, Grid, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Home() {
  return (
    <Grid
      container
      spacing={6}
      alignItems="center"
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid size={{ xs: 12, md: 6 }}>
  <Box
    sx={{
      height: "100vh",
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
          variant="h4"
          sx={{
            mt: 1,
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
          }}
        >
          Welcome to my Portfolio
        </Typography>
        <Box>
          <IconButton href="https://github.com/agrenigaha" target="_blank"
          sx={{
            color:"black",
          }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>

          <IconButton
            href="https://linkedin.com/in/agreni gaha"
            target="_blank"
            sx={{
            color:"black",
          }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>

          <IconButton href="https://instagram.com/iaminactive____" target="_blank"
          sx={{
            color:"black",
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
