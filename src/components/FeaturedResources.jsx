import { Description } from '@mui/icons-material'
import { Container,Box,Typography } from '@mui/material'
import React from 'react'

function FeaturedResources() {
    const section = [{
        image:'',
        Description:'',
    }]
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
          Featured
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Resources
        </Typography>
      </Box>

</Container>
  )
}

export default FeaturedResources
