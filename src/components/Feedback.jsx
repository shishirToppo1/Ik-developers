import { Typography, Box, Container, Card, CardMedia, CardContent, Avatar } from '@mui/material'
import React from 'react'
import StarRating from './StarRating'

const Feedback = () => {
  return (

    <Container sx={{
      width: "100%", display: "flex", flexDirection: 'column',
      marginTop: "100px"
    }}>

      <Box sx={{
        width: "50%",
        // paddingLeft:"30px"
        margin: 'auto',
        textAlign: 'center'
      }} >
        <Typography variant='h4' gutterBottom >Why cutomers love</Typography>
        <Typography variant='h4' gutterBottom sx={{ fontWeight: 'bold' }}>working with us</Typography>


        <Typography>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</Typography>

      </Box>

      {/* avatar and rating */}
      <Container sx={{
        height: "197px",
        width: "80%",
        marginTop: "50px",
        display: "flex",
        justifyContent: "space-evenly"
      }}>
        {/* ist card */}
        <Card sx={{ width: "121px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
          <CardMedia >
            <Avatar sx={{ height:'100px',width:'100px'}} alt="Remy Sharp" src="avatar1.png" />
          </CardMedia>
          <Box>
            <StarRating />
          </Box>
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Romeena De Silva
            </Typography>
          </CardContent>
        </Card>

        {/* 2nd card */}
        <Card sx={{ width: "121px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
          <CardMedia >
            <Avatar sx={{ height:'100px',width:'100px'}} alt="Remy Sharp" src="avatar2.png"/>
          </CardMedia>
          <Box>
            <StarRating />
          </Box>
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Romeena De Silva
            </Typography>
          </CardContent>
        </Card>

        {/* 3rd card */}
        <Card sx={{ width: "141px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
          <CardMedia >
            <Avatar sx={{ height:'170px',width:'170px'}} alt="Remy Sharp" src="avatar3.png"/>
          </CardMedia>
          <Box>
            <StarRating />
          </Box>
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "center",fontWeight: 'bold' }}>
              Imran Khan
            </Typography>
          </CardContent>
        </Card>
        {/* forth card */}
        <Card sx={{ width: "121px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
          <CardMedia >
            <Avatar sx={{ height:'100px',width:'100px'}} alt="Remy Sharp" src="avatar4.png"/>
          </CardMedia>
          <Box>
            <StarRating />
          </Box>
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Romeena De Silva
            </Typography>
          </CardContent>
        </Card>

        {/* fifth card */}
        <Card sx={{ width: "121px", display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center" }}>
          <CardMedia >
            <Avatar sx={{ height:'100px',width:'100px'}} alt="Remy Sharp" src="avatar4.png"/>
          </CardMedia>
          <Box>
            <StarRating />
          </Box>
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Romeena De Silva
            </Typography>
          </CardContent>
        </Card>


      </Container>
    </Container>
  )
}

export default Feedback
