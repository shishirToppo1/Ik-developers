import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import Appbar from '../components/Appbar'
import HeroSection from '../components/HeroSection'
import ServicesCarousel from '../components/ServicesCarousel'
// import CustomCarousel from '../components/CustomCarousel'
// import PurpleCircle from '../components/PurpleCircle'
    
import Goal from '../components/Goal'
import LogoList from '../components/LogoList'
import Feedback from '../components/Feedback'
import CaseStudies from '../components/CaseStudies'
import GreatSoftware from'../components/GreateSoftware'
// import DevelopmentApproach from '../components/DevelopmentApproach'


const Home = () => {

    return (
        <Box sx={{
            direction: "column"
        }}>
            {/* Appbar */}
            <Appbar />
            {/* Hero Section */}
            <HeroSection />

            <Box
                sx={{
                    border: "2px solid #E7DAED",
                    zIndex: 10,
                    height: "602px",
                    position: "relative",
                    background: "#F9F9FF"
                }}>

                <ServicesCarousel/>
            </Box>
            <Goal/>
            <LogoList/>
            <Feedback/>
            <CaseStudies/>
            <GreatSoftware/>
            {/* <DevelopmentApproach/> */}
          

        </Box>
    )
}

export default Home