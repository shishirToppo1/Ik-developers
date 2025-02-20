import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText } from '@mui/material';

function ServicesPage() {
  const services = [
    {
      title: 'Mobile App Development',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      title: 'Mobile App Development',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      title: 'Web Design & Development',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      title: 'Software Testing Service',
      description: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      title: 'Software Test',
      description: 'A Website is an extension of your website as well as your number one test. You can help you to express it properly. Your website is your number one test because we live in a digital age.',
    },
  ];

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Services we offer
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box sx={{ backgroundColor: 'background.paper', padding: 3, borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                {service.title}
              </Typography>
              <Typography variant="body1" component="p">
                {service.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ServicesPage;