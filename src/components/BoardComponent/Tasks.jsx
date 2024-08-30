import { Box, Container, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import ViewTaskModel from './ViewTaskModel'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Task from './Task'

export default function Tasks() {
    return (
        <Grid item xs={12} sm={4} justifyContent={"center"} padding={1} alignItems={"center"}>
            <Box bgcolor={"black"} display={"flex"} flexDirection={"column"} rowGap={1} justifyContent={"center"} sx={{ padding: "20px", borderRadius: 1, boxShadow: 4 }}>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Typography variant='h6' textAlign={"center"}>ToDo</Typography>
                    <IconButton><AddCircleIcon/></IconButton>
                </Stack>
                <Grid container direction={'column'}>
                    <Task />
                </Grid>
            </Box>
        </Grid>
    )
}
