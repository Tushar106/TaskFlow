import { Box, Button, Container, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation } from 'react-router-dom';
import CreateBoardModal from './BoardComponent/CreateBoardModal';

export default function Navbar() {
    const { logout } = useContext(AuthContext);
    let url=useLocation();
    console.log(url)
    const [open,setOpen]=useState(false);
    return (
        <Container sx={{ background: "black", padding: "10px" , boxShadow:8 }} maxWidth={"xl"}>
            <Box  sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Typography component="h1" fontSize={21} fontWeight={500}>
                    TaskFlow
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
                    <Button variant='contained' onClick={()=>{setOpen(true)}}  sx={{background:"#b8aaf8",fontWeight:"bold"}} size='small'>
                        Create Board
                    </Button>
                    <Button onClick={logout} startIcon={<LogoutIcon />} size='small'>
                        Logout
                    </Button>
                </Box>
            </Box>
            <CreateBoardModal open={open} setOpen={setOpen}/>
        </Container>
    )
}
