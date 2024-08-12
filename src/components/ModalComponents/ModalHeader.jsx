import React from 'react'
import { Dialog, Stack, Box, Typography, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';


export default function ModalHeader({title,onClose}) {
    return (
        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
            <Typography variant='h6' fontWeight={600}>{title}</Typography>
            <IconButton size='small' onClick={onClose}><CloseIcon /></IconButton>
        </Stack>
    )
}
