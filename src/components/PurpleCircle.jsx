import React from 'react'
import Image1 from "../Images/Ellipse 180.png"
import { Typography } from '@mui/material'

const PurpleCircle = ({ sx }) => {
    return (
        <Typography variant='img' component="img" src={Image1}
            sx={{
                position: 'absolute',
                zIndex: 0,
                ...sx
            }} />
    )
}

export default PurpleCircle