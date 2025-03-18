import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Container } from '@mui/material';


const caseStudies = [
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else...",
    image: "Website design1.jpg",
  },
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else...",
    image: "Website design2.jpg",
  },
  {
    title: "Website Design for SCFC Canada",
    description: "Born out of a vision, a single-minded objective that puts service before anything else...",
    image: "Website design3.jpg",
  },
];

const CaseStudies = () => {
  return (
    <Container sx={{ backgroundColor: '#f7f7f7', display: 'flex', flexDirection: 'column', marginTop: '50px', paddingBottom: '50px', width:"100%" }}>
        <Box sx={{
            border: "3px solid purple",
            marginLeft:"543px",
            mt:"51px",
            mb:'20px',
            // borderBlockColor:linear-gradient( #57007B, #6675F7),
            width: "69px"
        }}></Box>

        <Box textAlign="center" mb={5}>
          <Typography variant="h4" sx={{  }}>Our recent</Typography>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Case Studies</Typography>
        </Box>
      
      {caseStudies.map((study, index) => (
        <Container key={index} sx={{ mb: 3 }}>
          <Card 
            sx={{ 
              backgroundColor: index === 0 ? '#F1F2FF' : index === 1 ? '#F0FFF7' : '#FFF4F4', 
              color: 'black',
              display: 'flex', 
              gap: '1rem', 
              padding: '1rem' ,
            }}
          >
            <CardMedia
              component="img"
              image={study.image}
              alt={study.title}
              sx={{
                objectFit: 'cover',
                height: 300,
                width: '60%',
                borderRadius: '8px'
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ color: 'black' }}>
                {study.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'black' }}>
                {study.description}
              </Typography>
              <Button size="small" color="primary" sx={{ mt: 1 }}>
                Read more &gt;
              </Button>
            </CardContent>
          </Card>
        </Container>
      ))}

        <Button variant='ghost' sx={{
            width: 'fit-content',
            mt: "21px",
            marginLeft: "900px",
            display:"flex"
        }}>Read more case studies</Button>
    </Container>
  );
};

export default CaseStudies;
