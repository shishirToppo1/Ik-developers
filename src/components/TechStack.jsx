import React, { useState } from "react";
import { Box, Tab, Typography } from "@mui/material";
import { Container, styled } from "@mui/system";
import TabContext from "@mui/lab/TabContext";
import { TabList, TabPanel } from "@mui/lab";

// Custom styling for icons
const IconBox = styled(Box)({
  textAlign: "center",
  padding: "20px",
});

const techStack = [
  { name: "Node.js", image: "NodeJS.png" },
  { name: "PHP", image: "PHP.png" },
  { name: "MySQL", image: "SQL.png" },
  { name: "Java", image: "java.png" },
  { name: ".NET", image: "NETCore.png" },
];

const second_techStack = [
  { name: "Python", image: "Python.png" },
  { name: "Rails", image: "RubyOnRails.png" },
  { image: "Go.png" },
  { name: "MongoDB", image: "mongoDB.png" },
];

const TechStack = () => {
  const [value, setValue] = useState("1");

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ padding: "40px", margin: "auto" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Our Tech Stack
      </Typography>
      <Box
        sx={{
          width: "100%",
          typography: "body1",
          margin: "auto",
        }}
      >
        <TabContext value={value}>
          <Box
            sx={{
              margin: "auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TabList onChange={handleChange}>
              <Tab label="Backend" value="1" />
              <Tab label="Frontend" value="2" />
              <Tab label="Databases" value="3" />
              <Tab label="CMS" value="4" />
              <Tab label="CloudTesting" value="5" />
              <Tab label="DevOps" value="6" />
            </TabList>
          </Box>

          <TabPanel value="1">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
                flexWrap: "wrap",
                columnGap: "50px",
              }}
            >
              {techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "80%",
                margin: "auto",
                flexWrap: "wrap",
              }}
            >
              {second_techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>
          </TabPanel>
          <TabPanel value="2">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
                flexWrap: "wrap",
                columnGap: "50px",
              }}
            >
              {techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "80%",
                margin: "auto",
                flexWrap: "wrap",
              }}
            >
              {second_techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>
          </TabPanel>

          <TabPanel value="3">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
                flexWrap: "wrap",
                columnGap: "50px",
              }}
            >
              {techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "80%",
                margin: "auto",
                flexWrap: "wrap",
              }}
            >
              {second_techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>
          </TabPanel>

          <TabPanel value="4">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
                flexWrap: "wrap",
                columnGap: "50px",
              }}
            >
              {techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "80%",
                margin: "auto",
                flexWrap: "wrap",
              }}
            >
              {second_techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>
          </TabPanel>

          <TabPanel value="5">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
                flexWrap: "wrap",
                columnGap: "50px",
              }}
            >
              {techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "80%",
                margin: "auto",
                flexWrap: "wrap",
              }}
            >
              {second_techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>
          </TabPanel>

          <TabPanel value="6">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
                margin: "auto",
                flexWrap: "wrap",
                columnGap: "50px",
              }}
            >
              {techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "80%",
                margin: "auto",
                flexWrap: "wrap",
              }}
            >
              {second_techStack.map((tech, index) => (
                <IconBox key={index}>
                  <img
                    src={tech.image}
                    style={{ width: "130px", height: "80px" }}
                  />
                </IconBox>
              ))}
            </Box>
          </TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
};

export default TechStack;
