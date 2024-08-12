import LockOutlined from '@mui/icons-material/LockOutlined'
import { Avatar, Box, Button, CircularProgress, Container, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function LoginScreen() {
    const { login, user, loading } = useContext(AuthContext);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (user) {
            console.log(user)
            navigate("/")
        }
    }, [loading])
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
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const userData = {
            email: data.get('email'),
            password: data.get('password'),
        }
        try {
            const x = login(userData);
            toast.promise(x, {
                loading: 'Loading',
                success: 'Login In Successful',
                error: (err) => `${err}`,
            }).then(() => {
                setTimeout(() => {
                    navigate("/")
                }, 2000)
            });
        } catch (error) {
            toast.error('This is an error!');
        }
    }
    return (
        <Container component="main" maxWidth="xs">
            <Toaster />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h4">
                    Sign In
                </Typography>
                <Typography component="h6" textAlign={"center"} color={"#88939d"} mt={2} >
                Visualize Your Taskflow for Increased Productivity.
                Access Your Tasks Anytime, Anywhere
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}>Login</Button>
                </Box>
                <Grid container justifyContent={"flex-end"}>
                    <Grid item>
                        <Link href="/signUp">Don't have an account? Sign Up</Link>
                    </Grid>
                </Grid>

            </Box>
        </Container>
    )
}
