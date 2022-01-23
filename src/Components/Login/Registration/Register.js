import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import loginBg from '../../../images/Login/login3.jpg';
import SendIcon from '@mui/icons-material/Send';
import Navigation from '../../Shared/Navigation/Navigation'
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your password didn't match");
            return;
        }
        registerUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Box>
            <Navigation></Navigation>
            <Container style={{ marginTop: 100 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} style={{ marginTop: 90 }} >
                        <Typography variant="body1">
                            Registration Form
                        </Typography>

                        {!isLoading && <form onSubmit={handleLoginSubmit}>

                            <TextField focused sx={{ width: '90%', m: 1 }} label="Your E-mail"
                                name="email"
                                onChange={handleOnChange}
                                color="success" size="small"
                            />
                            <TextField sx={{ width: '90%', m: 1 }} label="Your Password"
                                type='password'
                                name="password"
                                onChange={handleOnChange}
                                color="success" size="small" focused />
                            <TextField sx={{ width: '90%', m: 1 }} label="Confirm Password"
                                type='password'
                                name="password2"
                                onChange={handleOnChange}
                                color="success" size="small" focused />

                            <Button type='submit' color="success" variant="contained" endIcon={<SendIcon />}>
                                Register
                            </Button> <br></br>
                            <NavLink style={{ textDecoration: 'none' }} to="/login"> <Button variant='text'>
                                <br></br>
                                Already registered ? Plaease Login</Button> </NavLink>
                        </form>}
                        {isLoading && <CircularProgress color="success" />
                        }
                        {user?.email && <Alert severity="success">Successfully created!!!</Alert>
                        }
                        {authError && <Alert severity="error">{authError}</Alert>
                        }
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <img
                            style={{ width: '100%' }}
                            src={loginBg} alt='' />
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default Register;