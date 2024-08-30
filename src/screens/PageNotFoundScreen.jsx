import React from 'react'
import Lottie from "lottie-react";
import groovyWalkAnimation from "../assets/Animation - 1723884736000.json"
import { Box, Container, Typography } from '@mui/material';


export default function PageNotFoundScreen() {
  return (
    <Container component={"main"}>
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
        <Lottie style={{ height: "300px" }} animationData={groovyWalkAnimation} loop={true} />
        <Typography>
          Page Not Found
        </Typography>
      </Box>
    </Container>
  )
}
