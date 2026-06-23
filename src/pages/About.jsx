import { Box, Typography, Grid } from "@mui/material";

export default function About() {
  return (
    <Grid container spacing={4} alignItems="center">
      <Grid size={{ xs: 12, md: 8 }}>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        ></Box>
        <Typography
          variant="h6"
          frontWeight="bold"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
          }}
        >
          About me
        </Typography>
        <Typography
          variant="h3"
          sx={{ marginTop: 5 }}
          sx={{
            mt: 1,
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 700,
          }}
        >
          I'm a frontend developer passionate about creating responsive and
          accessible web applications using React.js and Material UI.
        </Typography>
      </Grid>
    </Grid>
  );
}
