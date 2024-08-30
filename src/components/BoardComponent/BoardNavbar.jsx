import { Box, Button, CircularProgress, Container, IconButton, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import LogoutIcon from '@mui/icons-material/Logout';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { StoreContext } from '../../context/StoreContext';
import services from '../../services/services';
import toast from 'react-hot-toast';

export default function BoardNavbar({lastUpdated}) {
    const { boards, fetchLoading } = useContext(StoreContext);
    const { boardId } = useParams();
    const navigate=useNavigate();
    const {deleteBoard}=services();
    const board = boards.find((item) => item.id === boardId);
    const delBoard=()=>{
        toast.promise(deleteBoard(boardId), {
            loading: 'Loading',
            success: 'Board Deleted Successfully',
            error: (err) => `${err}`,
        }).then(()=>{
            navigate("/");
        })
    }
    return (
        <Container sx={{ background: "black", padding: "10px", boxShadow: 8, borderBottom: `3px solid ${board.color}` }} maxWidth={"xl"}>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <Typography component="h1" fontSize={21} fontWeight={500}>
                    TaskFlow
                </Typography>
                <Box sx={{ display: "flex", flexDirection: "row", gap: "10px",justifyContent:"center",alignItems:"center" }}>
                    <Typography component="h1" fontSize={14} fontWeight={500}>
                        Last Update - {lastUpdated.toDate().toLocaleString()}
                    </Typography>
                    <IconButton onClick={delBoard}  size='small'>
                        <DeleteIcon style={{color:"red"}}/>
                    </IconButton>
                </Box>
            </Box>
        </Container>
    )
}
