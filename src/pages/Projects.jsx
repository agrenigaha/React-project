import { Typography, Grid, Card, CardContent,Box } from "@mui/material";
import projects from "../data/projects.json";
export default function Projects() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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
          }}
        >
          Projects
        </Typography>
        </Box>
   <Grid container spacing={3} justifyContent="center">
  {projects.map((project) => (
    <Grid size={ 8 } key={project.id}>
      <Card
        sx={{
          boxShadow: 4,
          borderRadius: 3,
          p: 2,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 800,
              mb: 2,
            }}
          >
            {project.title}
          </Typography>

          <Typography variant="subtitle1" color="black" mb={2}>
            {project.technologies}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Popins', sans-serif",
            }}
          >
            {project.description1}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: 2,
              fontFamily: "'Popins', sans-serif",
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
  )
}