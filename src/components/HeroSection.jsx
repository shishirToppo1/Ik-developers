import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import PurpleCircle from './PurpleCircle';

function HeroSection() {
  return (
    <Box sx={{ position: "relative" }}>

      <Container sx={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        marginTop: '100px'
      }}>
        <Box>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Great Product is
          </Typography>

          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            built by great teams
          </Typography>

          <Typography variant="h5" component="p" gutterBottom>
            We help build and manage a team of world-class developers to bring your vision to life
          </Typography>

          {/* button */}
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 4,

              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Let's get started!
          </Button>
        </Box>
        <Typography variant='img' component="img" src={"./image1.png"} />

        <PurpleCircle sx={{
          bottom:0,
          left:"35%",
          transform:'translateY(50%)'
        }}/>
        
      </Container>

    </Box>
  );
}

export default HeroSection;