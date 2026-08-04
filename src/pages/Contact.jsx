import { useState } from "react";
import emailjs from "@emailjs/browser";
import MenuItem from "@mui/material/MenuItem";
import { useGetCountriesQuery } from "../redux/api/countryApi";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
export default function Contact() {
  const { data: countries, isLoading, isError } = useGetCountriesQuery();
  const [form, setForm] = useState({
    name: "",

    email: "",
    country: "",
    message: "",
  });
  const textFieldStyles = {
    marginTop: 2,
    backgroundColor: "white",
    borderRadius: 2,
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
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fb4yjfm",
        "template_quefd1j",
        {
          name: form.name,
          email: form.email,
          country: form.country,
          message: form.message,
        },
        {
          publicKey: "okEHbOQEaZmvOg08E",
        }
      )
      .then(() => {
        alert("Message sent successfully!");

        setForm({
          name: "",
          email: "",
          country: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message.");
      });
  };
  return (
    <Box
      sx={{
        minHeight: "100vh",
        px: {
          xs: 2,
          sm: 4,
          md: 6,
        },
        py: {
          xs: 4,
          md: 6,
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid size={{ xs: 12 }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="secondary"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3.5rem",
              },
              textAlign: {
                xs: "center",
                md: "left",
              },
              mt: { xs: 7, md: 0 },
            }}
          >
            Contact Me
          </Typography>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Box sx={{ mb: 2 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3533.739541538895!2d85.30765607525215!3d27.663528976207743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1783419590304!5m2!1sen!2snp"
              width="100%"
              height="450"
              style={{
                border: 0,
                borderRadius: "10px",
              }}
              loading="lazy"
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <Box component="form" onSubmit={sendEmail}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              sx={textFieldStyles}
            />

            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                select
                required
                label="Country"
                name="country"
                value={form.country}
                onChange={handleChange}
                sx={textFieldStyles}
              >
                {isError && (
                  <MenuItem disabled>Failed to load countries</MenuItem>
                )}
                {isLoading && (
                  <MenuItem disabled>Loading countries...</MenuItem>
                )}
                {countries?.map((country) => (
                  <MenuItem key={country.code} value={country.name}>
                    {country.name}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={6}
                value={form.message}
                onChange={handleChange}
                sx={textFieldStyles}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 12 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  marginTop: 3,
                  px: 5,
                  py: 1.2,
                  backgroundColor: "secondary.main",

                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Send
              </Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
