import { Box, Button, CircularProgress, Container, Grid, Stack, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import { StoreContext } from '../context/StoreContext';

export default function BoardsScreen() {
    const { boards, fetchLoading,refetch } = useContext(StoreContext)
    useEffect(() => {
        
    },[])
    if (fetchLoading) {
        console.log(fetchLoading)
        return <Container component={"main"} >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh"
            }}>
                <CircularProgress />
            </Box>
        </Container>;
    }
    return (
        <Container component={"main"} maxWidth={"xl"} sx={{ marginTop: "30px" }} >
            {boards.length > 0 ? <Box>
                <Grid container direction={"row"} spacing={4} rowGap={1}>
                    {boards.map((item) => {
                        const date = item.createdAt.toDate().toDateString()
                        return (
                            <Grid item xs={12} sm={3} key={item.id}>
                                <Box width={"100%"} bgcolor={"#111111"} borderLeft={`5px solid ${item.color}`} p={2}>
                                    <Grid container justifyContent={"center"} sx={{ cursor: "pointer" }} >
                                        <Grid item xs={6} overflow={"hidden"}>
                                            <Typography fontSize={"17px"} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>{item.title}</Typography>
                                            <Typography fontSize={"12px"} color={"grey"}>Created at: {date}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sx={{ display: "flex", justifyContent: "end" }} >
                                            <LaunchIcon />
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box> : <Stack textAlign={"center"} spacing={0}>
                <Typography variant='h5'>No boards created!</Typography>
                <Typography>Create your First board</Typography>
            </Stack>}
        </Container>

    )
}
