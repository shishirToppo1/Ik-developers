import React from 'react'
import PurpleCircle from './PurpleCircle'
import { Box, Button, Typography } from '@mui/material'
import "../App.css"
import EastSharpIcon from '@mui/icons-material/EastSharp';
import WestSharpIcon from '@mui/icons-material/WestSharp';

const Goal = () => {
    return (
        <Box sx={{
            background: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            mb:16,
            position:"relative",
           
        }}>
            <Box>
                <PurpleCircle sx={{
                    left: "5%",
                    transform: "translateY(-50%)"
                }} />


                <Box sx={{
                    display: "flex",
                    paddingTop: "182px",
                    paddingLeft: "105px",
                    paddingRight: "102px",
        

                }}>

                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        width:"fit-content",
                        minWidth: "535px",
                        height: "420px"
                    }}>
                        <Box sx={{
                            border: "3px solid purple",
                            // borderBlockColor:linear-gradient( #57007B, #6675F7),
                            width: "69px"
                        }}></Box>

                        <Typography sx={{
                            fontSize: "35px",
                            lineHeight: "55px",
                            paddingTop: "25px",
                            fontWeight: 400
                        }}>Leading companies trust us <br /><span className="text-35-700">to develop software</span></Typography>



                        <Typography sx={{ paddingTop: "30px" }}>
                        {"We add development capacity to tech teams. Our value isn’t"}
                        <br />
                        {"limited to building teams but is equally distributed across the"}
                        <br />
                        {"project lifecycle. We are a custom software development"}
                        <br />
                        {"company that guarantees the successful delivery of your project."}
                        </Typography>


                        <Button variant='ghost' sx={{
                            width: 'fit-content',
                            mt: "51px"
                        }}>See more informations</Button>

                    </Box>
                    <Box sx={{
                        width:"96px"
                    }}></Box>
                    <Box  sx={{}}>
                        <img src="./Abou-us-Video.png" alt="about us" />
                    </Box>
                </Box>

                <Box sx={{paddingLeft:"105px",
                        height:"133px",
                        width:"412px"
                   }}>


                    <Box sx={{
                        border: "3px solid purple",
                        width: "69px"
                    }}></Box>

                    <Box>
                        <Typography sx={{
                            fontSize: "30px",
                            lineHeight: "55px",
                            paddingTop: "25px",
                            fontWeight: 400
                        }}> Meet the People
                            <br /> <span className="text-35-700"> We are Working With</span></Typography>
                    </Box>
                </Box>



            </Box>
            <PurpleCircle sx={{
          bottom:0,
          right:"40%",
          transform:'translateY(50%)',
        
        }}/>

        <Box sx={{paddingLeft:"1247px",
                    height:"45px",
                    width:"112px",
                    gap:"22px",
                    display:"flex"
            }}>
            <WestSharpIcon sx={{color:"purple",
                                border: "3px solid ",
                                borderRadius:"50%",
                                borderColor:"purple",
                                height:"30px",
                                width:"30px"}}/>
                                
            <EastSharpIcon  sx={{bgcolor:"purple",
                                color:"white",
                                border: "3px solid ",
                                borderRadius:"50%",
                                borderColor:"purple",
                                height:"30px",
                                width:"30px"}}/>
        </Box >
           
     </Box>
    )
}

export default Goal
