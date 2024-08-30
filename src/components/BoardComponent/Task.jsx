import { Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import ViewTaskModel from './ViewTaskModel';

export default function Task() {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    }
    return (
        <>
        <Grid item bgcolor={"#292929"} borderRadius={1} padding={1} onClick={() => setOpen(true)}>
            <Typography fontSize={"18px"} >Make a react application</Typography>
            <Typography fontSize={"13px"} color={"red"}>Due Tommorrow</Typography>
        </Grid>
        <ViewTaskModel open={open} onClose={onClose} />
        </>
    )
}
