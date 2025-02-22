import { Box, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import Appbar from '../components/Appbar'
import HeroSection from '../components/HeroSection'
import CustomCarousel from '../components/CustomCarousel'
import PurpleCircle from '../components/PurpleCircle'
    
import Goal from '../components/Goal'
import LogoList from '../components/LogoList'


const Home = () => {

    const datas = [
        {
            icon: "",
            title: "Mobile App Development",
            content: "A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digit age."
        },
        {
            icon: "",
            title: "Mobile App Development",
            content: "A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digit age."
        },
        {
            icon: "",
            title: "Web Development",
            content: "A website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digit age."
        },
        {
            icon: "",
            title: "Software Testing Service",
            content: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age."
        },

    ]

    return (
        <Box sx={{
            direction: "column"
        }}>
            {/* Appbar */}
            <Appbar />
            {/* Hero Section */}
            <HeroSection />
            {/* Carousel */}
            <Box
                sx={{
                    border: "2px solid #E7DAED",
                    zIndex: 10,
                    height: "602px",
                    position: "relative",
                    background: "#F9F9FF"
                }}
            >
                <Typography sx={{
                    marginTop: "46px",
                    fontSize: "35px",
                    lineHeight: "55px",
                    fontWeight: 700,
                    textAlign: "center"
                }}>Services we offer</Typography>
                <CustomCarousel data={datas} />
            </Box>
            <Goal/>
            <LogoList/>

        </Box>
    )
}

export default Home