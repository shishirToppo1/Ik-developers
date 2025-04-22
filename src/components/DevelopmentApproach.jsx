import React from "react";
import { Container, Card, CardContent, Typography, Box } from "@mui/material";
// import makeStyles from '@mui/styles/makeStyles';

const DevelopmentApproach = () => {
  const items = [
    {
      title: "UX Driven Engineering",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      title: "Proven Experience and Expertise",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      title: "Developing Shared Understanding",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      title: "Security & Intellectual Property (IP)",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      title: "Code Reviews",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      title: "Quality Assurance & Testing",
      description:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
  ];

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Box
        sx={{
          border: "3px solid purple",
          marginLeft: "543px",
          mt: "51px",
          mb: "20px",
          width: "69px",
        }}
      ></Box>

      <Box textAlign="center" mb={5}>
        <Typography variant="h4" sx={{}}>
          Our design and
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          development approach
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        flexDirection="row"
      >
        {items.map((item, index) => (
          <Box item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent sx={{ width: "500px" }}>
                <Typography variant="h5">{item.title}</Typography>
                <Typography>{item.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default DevelopmentApproach;
