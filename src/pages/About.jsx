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

export default function About() {
  const programmingSkills = [
    { name: "HTML", value: 95 },
    { name: "CSS", value: 90 },
    { name: "JavaScript", value: 85 },
    { name: "React.js", value: 80 },
    { name: "Material UI", value: 85 },
  ];

  const languageSkills = [
    { name: "English", value: 90 },
    { name: "Nepali", value: 95 },
  ];

  return (
    <Grid container spacing={6} sx={{ px: 6, py: 6 }}>
      <Grid size={12}>
        <Typography variant="h2" color="secondary" sx={{ fontWeight: 700 }}>
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
            fontSize: "1.2rem",
            lineHeight: 2,
            maxWidth: "900px",
            fontFamily: "'Montserrat', sans-serif",
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
    
            <Box sx={{ display: "grid", gap: 1 }}>
              <Typography
                variant="h6"
                color="black"
                
              >
                Birthday: 18 Oct 2005
              </Typography>
              <Typography
                variant="h6"
                color="black"
                
              >
                Age: 20
              </Typography>
              <Typography
                variant="h6"
                color="black"
                
              >
                Address: Lalitpur
              </Typography>
              <Typography
                variant="h6"
                color="black"
                
              >
                Email: agrenigaha@gmail.com
              </Typography>
              <Typography
                variant="h6"
                color="black"
                
              >
                Phone: 9866205225
              </Typography>
              <Typography
                variant="h6"
                color="black"
                
              >
                Nationality: Nepali
              </Typography>
              <Typography
                variant="h6"
                color="black"
                
              >
                College: Everest Engineering College
              </Typography>
              <Typography
                variant="h6"
                color="black"
               
              >
                Language: English, Nepali
              </Typography>
            </Box>
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
              <Grid size={{ xs: 12, md: 6 }}>
                <Typography
                  variant="h4"
                  color="black"
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  Programming Skills
                </Typography>
                {programmingSkills.map((item) => (
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
                  sx={{ fontWeight: 700, mb: 2 }}
                >
                  Language Skills
                </Typography>
                {languageSkills.map((item) => (
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
         
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                  Knowledge
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  • HTML & CSS
                  <br />
                  • JavaScript
                  <br />
                  • React.js
                  <br />• MUI
                </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            
            
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                  Interests
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 2 }}>
                  • UI/UX Design
                  <br />
                  • Building Responsive Websites
                  <br />
                  • Learning New Technologies
                  <br />• Open Source Projects
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
              <Step active>
                <StepLabel>
                  <Typography variant="h6">
                    Bachelor of Engineering in Information Technology (BEIT)
                  </Typography>
                </StepLabel>
                <StepContent>
                  <Typography>Everest Engineering College</Typography>
                  <Typography color="secondary">2022 - Present</Typography>
                </StepContent>
              </Step>

              <Step active>
                <StepLabel>
                  <Typography variant="h6">Higher Secondary (+2)</Typography>
                </StepLabel>
                <StepContent>
                  <Typography>Prasadi Academy</Typography>
                  <Typography color="secondary">2021 - 2022</Typography>
                </StepContent>
              </Step>

              <Step active>
                <StepLabel>
                  <Typography variant="h6">SEE</Typography>
                </StepLabel>
                <StepContent>
                  <Typography>Eager Bridge Secondary School</Typography>
                  <Typography color="secondary">2021</Typography>
                </StepContent>
              </Step>
            </Stepper>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
