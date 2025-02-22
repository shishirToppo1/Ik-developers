import {AppBar, Box, Button, Stack, styled, Typography} from "@mui/material"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Gradient } from "@mui/icons-material";


import React from 'react'

let ColorText = styled(Typography)({
    color: 'black'
})


const Appbar = () => {
    return (
        <Stack>

            {/* Menu bar */}
            <AppBar sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '10px',
                backgroundColor: '#FFFFFF'
            }}>

                {/* Logo and company name */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    // width:'200px',
                    // justifyContent: 'space-between',
                    alignItems: 'center',


                }}>
                    {/* <AcUnitIcon sx={{color: 'black',paddingLeft: '20px'}}/> */}
                    <Typography variant="body1" sx={{ paddingLeft: '20px' }}><img src={"./Logo.png"} /></Typography>
                    <Typography variant="body1" sx={{ color: 'black', paddingLeft: '20px', fontFamily: 'Inspiration' }}>Ik developers</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    // flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '30px'
                }}>
                    <ColorText variant="body1">About Us</ColorText>
                    <ColorText variant="body1">Services</ColorText>
                    <ColorText variant="body1">Case Studies</ColorText>
                    <ColorText variant="body1">Blog</ColorText>
                    <ColorText variant="body1">How It Works</ColorText>
                    <ColorText variant="body1">Hire</ColorText>

                </Box>

                <Button sx={{
                    background: "linear-gradient(25deg, #57007B, #6675F7)",
                    color: "white",
                    padding: "10px 30px",
                    fontSize: "14px",
                    borderRadius: "8px",
                    textTransform: "none",
                    "&:hover": {
                        background: "linear-gradient(25deg, #57007B, #6675F7)",
                    },
                }}>Contact us</Button>

            </AppBar>

        </Stack>
    )
}

export default Appbar