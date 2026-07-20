import {
  Box,
  Typography,
  Grid,
  LinearProgress,
  Card,
  CardContent,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
} from "@mui/material";
import profile from "../assets/profile.jpeg";
import about from "../data/about.json";
import programming from "../data/programming.json";
import language from "../data/language.json";
import knowledge from "../data/knowledge.json";
import interests from "../data/interests.json";
import education from "../data/education.json";
import resume from "../assets/Agreni_Gaha_CV.1.pdf";

export default function About() {
  return (
    <Grid
      container
      spacing={{ xs: 4, md: 6 }}
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Grid size={12}>
        <Typography
          variant="h2"
          color="secondary"
          sx={{
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 900,
            mb: 1,
            fontSize: {
              xs: "2.2rem",
              sm: "2.8rem",
              md: "3.5rem",
            },
            textAlign: {
              xs: "center",
              md: "left",
            },
            mt:{
              xs:7,
              md:0,
            },
          }}
        >
          About Me
        </Typography>
      </Grid>

      <Grid size={12}>
        <Box
          component="img"
          src={profile}
          alt="Agreni Gaha"
          sx={{
            width: "100%",
            maxWidth: "100%",
            Height: "0px",
            objectFit: "cover",
            borderRadius: "20px",
            boxShadow: "20px ",
            alignContent: "center",
            justifyContent: "center",
          }}
        />
      </Grid>

      <Grid size={12}>
        <Typography
          variant="body1"
          sx={{
            fontSize: "1.4rem",
            lineHeight: 2,
            maxWidth: "900px",
            fontFamily: "'Poppins', sans-serif",
            mt: "1",
          }}
        >
          Hello! I'm Agreni Gaha, a passionate Frontend Developer who enjoys
          building responsive and user-friendly web applications using tools
          like React.js, Material UI, JavaScript, and I'm continuously learning
          and improving my skills in front-end development. My goal is to create
          beautiful, accessible, and high-performing digital experiences.
        </Typography>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ p: 3, borderRadius: 4 , bgcolor: "primary.main"}}>
              {about.leftColumn.map((item) => (
                <Typography
                  key={item.label}
                  variant="h6"
                  fontFamily="'Poppins', sans-serif"
                  fontSize="1.4rem"
                  
                >
                  {item.label}: {item.value}
                </Typography>
              ))}
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={3} sx={{ p: 3, borderRadius: 4, bgcolor: "primary.main"}}>
              {about.rightColumn.map((item) => (
                <Typography
                  key={item.label}
                  variant="h6"
                  fontFamily="'Poppins', sans-serif"
                  fontSize="1.4rem"
                  
                >
                  {item.label}: {item.value}
                </Typography>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Button
          variant="contained"
          color="secondary"
          href={resume}
          download
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: 5,
            fontWeight: 700,
            mr: 2,
          }}
        >
          Download CV
        </Button>
      </Box>

      <Grid size={{ xs: 12, md: 12 }}>
        <Card
          sx={{
            bgcolor: "primary.main",
            boxShadow: 4,
            borderRadius: 3,
            p: 2,
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: 10,
            },
          }}
        >
          <CardContent>
            <Grid container spacing={6}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h4"
                  color="black"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Programming Skills
                </Typography>

                {programming.map((item) => (
                  <Box key={item.name} sx={{ mb: 2 }}>
                    <Typography>{item.name}</Typography>
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={item.value}
                      sx={{ height: 8, borderRadius: 5 }}
                    />
                  </Box>
                ))}
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h4"
                  color="black"
                  sx={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    mb: 2,
                  }}
                >
                  Language Skills
                </Typography>

                {language.map((item) => (
                  <Box key={item.name} sx={{ mb: 2 }}>
                    <Typography>{item.name}</Typography>
                    <LinearProgress
                      color="secondary"
                      variant="determinate"
                      value={item.value}
                      sx={{ height: 8, borderRadius: 5 }}
                    />
                  </Box>
                ))}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid size={12}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              color="black"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                mb: 2,
              }}
            >
              Knowledge
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 2,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.4rem",
              }}
            >
              {knowledge.map((item, i) => (
                <span key={i}>
                  • {item}
                  <br />
                </span>
              ))}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              variant="h4"
              color="black"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                mb: 2,
              }}
            >
              Interests
            </Typography>
            <Typography
              variant="body1"
              sx={{
                lineHeight: 2,
                fontFamily: "'Poppins', sans-serif",
                fontSize: "1.4rem",
              }}
            >
              {interests.map((item, i) => (
                <span key={i}>
                  • {item}
                  <br />
                </span>
              ))}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Card
          sx={{
            bgcolor: "primary.main",
            transition: ".3s",
            borderRadius: 4,
            p: 2,
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: 10,
            },
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Education
            </Typography>

            <Stepper orientation="vertical">
              {education.map((item, index) => (
                <Step key={index} active>
                  <StepLabel>
                    <Typography variant="h6">{item.title}</Typography>
                  </StepLabel>

                  <StepContent>
                    <Typography>{item.place}</Typography>
                    <Typography color="secondary">{item.year}</Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
