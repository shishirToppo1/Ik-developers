import {
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import React from "react";

function FeaturedResources() {
  const section = [
    {
      img: "https://storage.googleapis.com/a1aa/image/c7a52987-f34a-4815-6a11-83610bf9ba85.jpg",
      alt: "Office workspace with multiple computers and a skull sticker on one monitor",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/7fc008b1-1847-41f2-2603-756d902ced24.jpg",
      alt: "Dark desk setup with multiple monitors showing code and a phone",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/54007c33-4f95-4545-8010-4db107f2ca93.jpg",
      alt: "Laptop and notebook on a wooden table with a phone",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/e2477529-ebc3-4c5f-3a97-a77cffba0e10.jpg",
      alt: "Monitor displaying code in a dark room with blue lighting",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
    {
      img: "https://storage.googleapis.com/a1aa/image/5e00194c-a2b0-45b2-81a4-ccb42c86c9e0.jpg",
      alt: "Glasses in front of a monitor displaying code",
      title: "How to Build a Scalable Application up to 1 Million Users on AWS",
    },
  ];

  return (
    <Box
      sx={{ bgcolor: "#f7f7f7", py: 6, px: 2, maxWidth: "100%", mx: "auto" }}
    >
      <Box textAlign="center" mb={6}>
        <Box
          sx={{
            width: "69px",
            height: "3px",
            bgcolor: "#a52a7a",
            mx: "auto",
            mb: 1,
          }}
        />
        <Typography variant="h5" color="textPrimary">
          Featured
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="textPrimary">
          Resources
        </Typography>
      </Box>
      <Box sx={{ overflowX: "auto" }}>
        <Stack direction="row" spacing={4} sx={{ pb: 4 }}>
          {section.map((res, index) => (
            <Card key={index} sx={{}}>
              <CardMedia
                component="img"
                height="128"
                image={res.img}
                alt={res.alt}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ p: 1 }}>
                <Typography variant="caption" color="text.primary">
                  {res.title}
                </Typography>
                <Button
                  size="small"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                    fontSize: "0.75rem",
                    color: "purple",
                  }}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}

export default FeaturedResources;
