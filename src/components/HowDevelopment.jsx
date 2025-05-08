import { Container, Box, Typography, Card, CardContent } from "@mui/material";
import React from "react";

const HowDevelopment = () => {
  const items = [
    {
      no: "#1",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      no: "#3",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },

    {
      no: "#5",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
  ];

  const second_items = [
    {
      no: "#2",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
    {
      no: "#4",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },

    {
      no: "#6",
      title: "Assemble the right team",
      description:
        "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
    },
  ];
  return (
    <Container>
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
          How development
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          through Alcaline works
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
              <CardContent sx={{ width: "300px" }}>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "purple", fontWeight: "bold" }}
                  >
                    {item.no}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography>{item.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: "11px", mb: "11px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <Box
            sx={{
              border: "2px solid orange",
              height: "20px",
              width: "0px",
            }}
          />
          <Box
            sx={{
              border: "2px solid orange",
              height: "20px",
              width: "0px",
            }}
          />
          <Box
            sx={{
              border: "2px solid orange",
              height: "20px",
              width: "0px",
            }}
          />
        </Box>
        {/* main line */}
        <Box
          sx={{
            border: "2px solid orange",
            width: "100%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "80%",
            marginLeft: "10%",
            // border: "2px solid red",
            padding: 0,
            marginRight: 0,
          }}
        >
          <Box
            sx={{
              border: "2px solid orange",
              height: "20px",
              width: "0px",
            }}
          />
          {/* Middle */}
          <Box
            sx={{
              border: "2px solid orange",
              height: "20px",
              width: "0px",
              marginLeft: "50px",
            }}
          />

          {/* End */}
          <Box
            sx={{
              border: "2px solid orange",
              height: "20px",
              width: "0px",
              justifySelf: "flex-end",
            }}
          />
        </Box>
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
              <CardContent sx={{ width: "300px" }}>
                <Box sx={{ display: "flex", gap: "5px" }}>
                  <Typography
                    variant="h5"
                    sx={{ color: "purple", fontWeight: "bold" }}
                  >
                    {item.no}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography>{item.description}</Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default HowDevelopment;
