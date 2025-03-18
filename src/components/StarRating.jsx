import { Box } from '@mui/material'
import React from 'react'
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    5: 'Excellent+',
  };
  

function StarRating() {
    const value = 5;
  return (
    <Box>
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }}  />}
        sx={{fontSize: '14px'}}
      />
      <Box sx={{ ml: 2 }}></Box>
    </Box>
  )
}

export default StarRating
