import React, { useState } from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";

const services = [
  { id: 1, title: "Web Design & Development", description: "We help you create stunning websites.", icon: "🌐" },
  { id: 2, title: "Mobile App Development", description: "Bring your ideas to life with mobile apps.", icon: "📱" },
  { id: 3, title: "Software Testing Service", description: "Ensure quality and performance with testing.", icon: "🧪" },
  { id: 4, title: "Software Development", description: "Custom software tailored to your needs.", icon: "💻" },
  { id: 5, title: "DevOps", description: "Streamline your workflow with DevOps.", icon: "🔄" },
  { id: 6, title: "Cloud Solutions", description: "Leverage the power of the cloud.", icon: "☁️" },
];

const ServicesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleDotClick = (index) => setCurrentIndex(index);

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa", width: "100%", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" textAlign="center" fontWeight="bold" sx={{ mb: 6 }}>
          Services We Offer
        </Typography>

        {/* Carousel Container */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4,
            transform: `translateX(calc(-${currentIndex * 20}% + 50% - 10%))`, 
            transition: "transform 0.5s ease-in-out",
            width: `${services.length * 20}%`,
          }}
        >
          {services.map((service, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 calc(100% / 3 - 1.5rem)",
                opacity: index === currentIndex ? 1 : 0.8,
                transform: index === currentIndex ? "translateY(20px)" : "translateX(0)",
                transition: "opacity 0.5s ease",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 2,
                  boxShadow: 3,
                  p: 2,
                  border: index === currentIndex ? "2px solid #8a2be2" : "1px solid #e0e0e0",
                  transform: index === currentIndex ? "scale(1.05)" : "scale(1)",
                  transition: "transform 0.5s ease",
                }}
              >
                <CardContent>
                  <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                    <Typography variant="h4">{service.icon}</Typography>
                  </Box>
                  <Typography variant="h5" component="h3" fontWeight="medium" textAlign="center" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>

        {/* Dot Indicators */}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 17 }}>
          {services.map((_, index) => (
            <Box
              key={index}
              onClick={() => handleDotClick(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: index === currentIndex ? "#8a2be2" : "#e0e0e0",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesCarousel;