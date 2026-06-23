import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  const textFieldStyles = {
    marginTop: 2,
    backgroundColor: "white",
    borderRadius: "4px",
    "& .MuiInputBase-input": {
      color: "white",
    },
    "& .MuiInputLabel-root": {
      color: "black",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&:hover fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "blue",
      },
    },
  };
  return (
    <Box sx={{ height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",}}>
      <Typography variant="h2" fontWeight="bold"
      sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 600,
        }}>
        Contact Me
      </Typography>
      <TextField label="Name" sx={textFieldStyles} />
      <TextField label="Email" sx={textFieldStyles} />
      <TextField label="Message" sx={textFieldStyles} />
      <Button
        variant="contained"
        sx={{ marginTop: 3, backgroundColor: "grey",
          mt: 1,
          fontFamily: "'Montserrat', sans-serif",
          fontWeight: 700,
        }}>
      
        Send
      </Button>
    </Box>
  );
}
