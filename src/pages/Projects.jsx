import { Box, Typography } from "@mui/material";

export default function Projects() {
 
  return (
    <Box sx={{ height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",}}>
      <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 3 }}
      sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
        }}>
        Projects
      </Typography>
                <Typography variant="h2" fontWeight="bold"
                sx={{
          mt: 1,
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
        }}>
                  Portfolio website
                </Typography>

                <Typography variant="h2" sx={{ marginTop: 5 }}
                sx={{
          mt: 1,
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
        }}>
                  Built using react and mui
                </Typography>
    </Box>
  );
}