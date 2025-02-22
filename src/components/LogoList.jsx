// import { Box } from '@mui/material'
import React from 'react'
import { Box, Typography, } from '@mui/material';

function LogoList() {
  return (
   <Box sx={{height:"102px",
            width:"100%",
            display:"flex",
            alignItems:"center",
            bgcolor:"#F7F7FA",
            marginTop:"-125px",
            position:"relative"
    }}> <Box sx={{width:"100%",height:"81px", display:"flex",justifyContent:"space-between"}}>
        <Typography variant='img' component="img" src={"./logo-9.png"}/>
        <Typography variant='img' component="img" src={"./logo8.png"}/>
        <Typography variant='img' component="img" src={"./logo5.png"}/>
        <Typography variant='img' component="img" src={"./logo-7.png"}/>
        <Typography variant='img' component="img" src={"./logo9.png"}/>
        <Typography variant='img' component="img" src={"./logo-6.png"}/>
        <Typography variant='img' component="img" src={"./logo3.png"}/>
        </Box>
   </Box>
  )
}

export default LogoList
