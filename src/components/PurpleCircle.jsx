import React from 'react'

import { Typography } from '@mui/material'

const PurpleCircle = ({ sx }) => {
    return (
        <Typography variant='img' component="img" src={"./Ellipse_180.png"}
            sx={{
                position: 'absolute',
                zIndex: 0,
                ...sx
            }} />
    )
}

export default PurpleCircle