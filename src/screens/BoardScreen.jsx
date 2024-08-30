import { Box, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import BoardNavbar from '../components/BoardComponent/BoardNavbar'
import services from '../services/services'
import { useParams } from 'react-router-dom';
import BoardContainer from '../components/BoardComponent/BoardContainer';

export default function BoardScreen() {
    const [loading, setLoading] = useState(true);
    const { fetchBoard } = services();
    const { boardId } = useParams();
    const [boardData, setBoardData] = useState();
    useEffect(() => {
        const fetchBoardData = async () => {
            try {
                const data = await fetchBoard(boardId);
                setBoardData(data);
                setLoading(false)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchBoardData();
    }, [])
    if (loading ) {
        return <Container component={"main"} >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <CircularProgress />
            </Box>
        </Container>;
    }
    if(boardData===undefined){
        return <Container component={"main"} >
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <Typography variant="h5" color="textSecondary">Board Not Found</Typography>
            </Box>
        </Container>;
    }

    return (
        <>
            <BoardNavbar lastUpdated={boardData.lastUpdated} />
            <BoardContainer />
        </>
    )
}
