import ServiceCard from './ServiceCard';
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { MobileStepper, Paper, Typography, Button, Box } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";



const CustomCarousel = ({ data }) => {
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    return (

        <Box sx={{ p: 2, textAlign: "center" }}>
            <SwipeableViews index={activeStep} onChangeIndex={(index) => setActiveStep(index)}>
                {data.map((item, index) => (
                    <div key={index}>
                        <Typography variant='h5'sx={{fontWeight:"bold"}}>{item.title}</Typography>
                        <Typography variant='body2'>{item.content}</Typography>
                    </div>
                ))}
            </SwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="center"
                activeStep={activeStep}
                sx={{
                    background:"#F9F9FF"
                }}
            />
        </Box>
    );
};

export default CustomCarousel;
