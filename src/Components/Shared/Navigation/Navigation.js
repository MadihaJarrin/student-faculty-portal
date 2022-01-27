import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';



const darkTheme = createTheme({
    palette: {
        // mode: 'dark',
        primary: {
            main: '#095A70',
        },
    },
});

const Navigation = () => {
    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="static" sx={{ p: 1 }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography sx={{ flexGrow: 0 }} variant="h6" component="div" >
                            Students & Faculty Portal

                        </Typography>

                        <Typography sx={{ flexGrow: 1 }}>

                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/Home" target='blank' >
                                <Button color="inherit">Home</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/teaching" target='blank' >
                                <Button color="inherit">Teaching</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/appointment" target='blank'>
                                <Button variant="inherit"> Enrollment</Button></NavLink>

                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/about" target='blank'>
                                <Button variant="inherit"> About </Button></NavLink>

                        </Typography>
                        <Typography>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/register" target='blank' >
                                <Button color="inherit">Register</Button>
                            </NavLink>


                            {user?.email ?
                                <Button onClick={logout} style={{ textDecoration: 'none' }} color="inherit">Logout</Button>

                                :

                                <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login" target='blank' >
                                    <Button color="inherit">Login</Button>
                                </NavLink>



                            }
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
};

export default Navigation;