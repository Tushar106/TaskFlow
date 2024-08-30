
import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Tasks from './Tasks'

export default function BoardContainer() {
    return (
        <Container component={"main"} maxWidth={"xl"} sx={{ marginTop: "30px" }}>
            <Grid container direction={"row"} >
            <Tasks/>
            <Tasks/>
            <Tasks/>
            </Grid>
        </Container>
    )
}
