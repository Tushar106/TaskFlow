import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box, CircularProgress, Container } from "@mui/material";
import BoardsNavbar from "../components/BoardsComponent/BoardsNavbar";
import { Toaster } from "react-hot-toast";
import BoardNavbar from "../components/BoardComponent/BoardNavbar";
import { StoreContext } from "../context/StoreContext";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    // const {fetchLoading}=useContext(StoreContext);
    const url=useLocation();

    if (loading) {
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

    if (user) {
        return (
            <>
                {/* {url.pathname=="/"? <BoardsNavbar/>:<BoardNavbar/>} */}
                <Toaster/>
                {children}
            </>
        );
    }

    return <Navigate to="/login" />;
};


export default PrivateRoute;