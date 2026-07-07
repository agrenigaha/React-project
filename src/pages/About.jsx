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
} from "@mui/material";
import profile from "../assets/profile.jpeg";
import about from "../data/about.json";
import programming from "../data/programming.json";
import language from "../data/language.json";
import knowledge from "../data/knowledge.json";
import interests from "../data/interests.json";
import education from "../data/education.json";

export default function About() {
  return (
    <Grid container spacing={6} sx={{ px: 6, py: 6 }}>
      <Grid size={12}>
        <Typography
          variant="h2"
          color="secondary"
          sx={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900 }}
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
            height: { xs: 300, md: 550 },
            objectFit: "cover",
            borderRadius: 2,
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
        <Grid container spacing={4}>
          <Grid size={6}>
            <Box sx={{ display: "grid", gap: 1 }}>
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
            </Box>
          </Grid>

          <Grid size={6}>
            <Box sx={{ display: "grid", gap: 1 }}>
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
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Grid size={12}>
        <Card
          sx={{
            bgcolor: "primary.main",
            boxShadow: 4,
            borderRadius: 3,
            p: 2,
          }}
        >
          <CardContent>
            <Grid container spacing={4}>
              <Grid size={6}>
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

              <Grid size={6}>
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
          <Grid size={6}>
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

          <Grid size={6}>
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
            boxShadow: 4,
            borderRadius: 3,
            p: 2,
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
