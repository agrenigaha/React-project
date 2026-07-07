import { Box, Typography, TextField, Button, Grid } from "@mui/material";

export default function Contact() {
  const textFieldStyles = {
    marginTop: 2,
    backgroundColor: "white",
    borderRadius: "4px",
    "& .MuiInputBase-input": {
      color: "black",
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "blue",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "grey",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
      
      >
        <Grid size={9}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="secondary"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
            }}
          >
            Contact Me
          </Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{mb:2}}>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7067.464274232845!2d85.310403!3d27.663758!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1782710295594!5m2!1sen!2snp" 
            width="100%" 
            height="450"
             style={{
              border:0,
              borderRadius:"10px",
             }}
             loading="lazy" 
             />
          </Box>
        </Grid>
        <Grid size={12}>
          <TextField fullWidth label="Name" sx={textFieldStyles} />
        </Grid>
        <Grid size={12}>
          <TextField fullWidth label="Email" sx={textFieldStyles} />
        </Grid>
        <Grid size={12}>
          <TextField fullWidth label="Message" multiline row={6} sx={textFieldStyles} />
        </Grid>
        <Grid size={12}>
          <Button
            variant="contained"
            sx={{
              marginTop: 3,
              backgroundColor: "grey",
              mt: 1,
              fontFamily: "'Popins', sans-serif",
              fontWeight: 600,
            }}
          >
            Send
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
