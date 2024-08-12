import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Box, CircularProgress, Container } from "@mui/material";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);

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
                <Navbar />
                <Toaster/>
                {children}
            </>
        );
    }

    return <Navigate to="/login" />;
};


export default PrivateRoute;