import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  IconButton,
  Box,
} from "@mui/material";

const GreatSoftware = () => {
  const sections = [
    {
      title: "Build the right team to scale",
      content: `Finding the right talent is not easy. We help you find the talent that
        suits your needs, follows your processes, and sticks with you long term,
        just in case with freelancers.`,
      image: "Software1.jpg",
      author: "Jeeva Markiram, CEO",
    },
    {
      title: "Hire the best developers",
      content: `We connect you with top-tier developers who integrate seamlessly into
        your workflow, ensuring long-term success.`,
      image: "Software2.jpg",
      author: "Jeeva Markiram, CEO",
    },
    {
      title: "Scale with confidence",
      content: `Our platform helps you grow without worrying about talent gaps, ensuring
        stability and scalability for your business.`,
      image: "Software3.jpg",
      author: "Jeeva Markiram, CEO",
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
          Way of building
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Great Software
        </Typography>
      </Box>

      <Box
        display="flex"
        flexWrap="wrap"
        gap={4}
        justifyContent="center"
        flexDirection="column"
      >
        {sections.map((section, index) => (
          <Card
            key={index}
            sx={{
              width: 1200,
              flex: "1 1 350px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: index === 1 ? "row" : "row-reverse",
              }}
            >
              <CardMedia
                component="img"
                height="150"
                image={section.image}
                alt={section.title}
                sx={{
                  objectFit: "cover",
                  height: 350,
                  width: "50%",
                  borderRadius: "8px",
                  // marginLeft: 'auto',
                  // display:'flex'
                }}
              />
              <CardContent sx={{}}>
                <Typography variant="h6">{section.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {section.content}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {section.author}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default GreatSoftware;
