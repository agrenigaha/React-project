import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  CardMedia,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DevicesIcon from "@mui/icons-material/Devices";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CloseIcon from "@mui/icons-material/Close";
import JavascriptIcon from "@mui/icons-material/Javascript";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import SourceIcon from "@mui/icons-material/Source";
import skills from "../data/skills.json";
const iconMap = {
  Code: <CodeIcon sx={{ fontSize: 70, color: "secondary.main" }} />,
  Devices: <DevicesIcon sx={{ fontSize: 70, color: "secondary.main" }} />,
  DesignServices: (
    <DesignServicesIcon sx={{ fontSize: 70, color: "secondary.main" }} />
  ),
  Javascript: <JavascriptIcon sx={{ fontSize: 70, color: "secondary.main" }} />,
  DashboardCustomize: (
    <DashboardCustomizeIcon sx={{ fontSize: 70, color: "secondary.main" }} />
  ),
  Source: <SourceIcon sx={{ fontSize: 70, color: "secondary.main" }} />,
};

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 4, md: 6 },
        py: { xs: 4, md: 6 },
      }}
    >
      <Typography
        variant="h3"
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
          mt:{xs:7,
              md:0,},
        }}
      >
        What I Do
      </Typography>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {skills.map((skill, index) => (
          <Grid
            size={{ xs: 12, sm: 6, md: 4 }}
            key={index}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                width: "100%",
                height: "100%",
                mt: 2,
                p: {
                  xs: 3,
                  sm: 4,
                  md: 5,
                },
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "'Popins', sans-serif",
                fontWeight: 600,
                textAlign: "center",
                transition: "0.3s",
                cursor: "pointer",
                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: 10,
                  borderColor: "secondary.main",
                },
                border: "1px solid transparent",
              }}
            >
              <Box mb={2}>{iconMap[skill.icon]}</Box>
              <Typography
                variant="h6"
                fontFamily="'Popins', sans-serif"
                fontWeight="800"
              >
                {skill.title}
              </Typography>

              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mt: 2,
                  fontFamily: "'Popins', sans-serif",
                  fontWeight: 600,
                }}
              >
                {skill.description.substring(0, 100)}...
              </Typography>

              <Button
                variant="outlined"
                color="secondary"
                sx={{ mt: 3 }}
                onClick={() => setSelectedSkill(skill)}
              >
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      {selectedSkill && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1300,
          }}
        >
          <Card
            sx={{
              width: 650,
              maxWidth: "90%",
              position: "relative",
              borderRadius: 4,
            }}
          >
            <IconButton
              onClick={() => setSelectedSkill(null)}
              sx={{
                position: "absolute",
                top: 10,
                right: 10,
                zIndex: 1,
                color: "#fff",
                fontSize: {
                  xs: 50,
                  sm: 60,
                  md: 70,
                },
              }}
            >
              <CloseIcon />
            </IconButton>
            <CardMedia
              component="img"
              image={selectedSkill.src}
              alt={selectedSkill.title}
              height="300"
            />

            <CardContent>
              <Typography
                variant="h5"
                fontFamily="'Popins', sans-serif"
                fontWeight="800"
              >
                {selectedSkill.title}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: {
                    xs: ".95rem",
                    md: "1rem",
                  },
                }}
                color="text.secondary"
                lineHeight={1.8}
                fontFamily="'Popins', sans-serif"
                fontWeight={600}
              >
                {selectedSkill.description}
              </Typography>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
}
