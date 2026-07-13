import { Typography, Grid, Card, CardContent, Box } from "@mui/material";
import projects from "../data/projects.json";
export default function Projects() {
  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          alignItems: "center",
          mb: 5,
        }}
      >
        <Typography
          variant="h3"
          color="secondary"
          fontWeight="bold"
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
            mt:{xs:7,
              md:0,},
          }}
        >
          Projects
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project) => (
          <Grid size={{ xs: 12, md: 10, lg: 8 }} key={project.id}>
            <Card
              sx={{
                borderTop: "6px solid",
                borderColor: "primary.main",
                borderRadius: 4,
                p: {
                  xs: 2,
                  sm: 3,
                  md: 4,
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 800,
                    mb: 2,
                    fontSize: {
                      xs: "1.5rem",
                      sm: "1.8rem",
                      md: "2rem",
                    },
                  }}
                >
                  {project.title}
                </Typography>

                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: "secondary.main",
                    fontSize: {
                      xs: ".95rem",
                      md: "1rem",
                    },
                    mb: 2,
                  }}
                >
                  {project.technologies}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'Popins', sans-serif",

                    fontSize: {
                      xs: "1rem",
                      md: "1.1rem",
                    },
                    lineHeight: 1.8,
                  }}
                >
                  {project.description1}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    mt: 2,
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: {
                      xs: "1rem",
                      md: "1.1rem",
                    },
                    lineHeight: 1.8,
                  }}
                >
                  {project.description2}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
