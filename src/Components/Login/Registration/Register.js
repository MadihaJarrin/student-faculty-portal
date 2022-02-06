import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import loginBg from '../../../images/Login/registration.png';
import SendIcon from '@mui/icons-material/Send';
import Navigation from '../../Shared/Navigation/Navigation'
import { Box } from '@mui/system';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Home/Footer/Footer';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useNavigate();

    const handleOnBlur = e => {
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
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Box style={{ background: '#BFECE6' }}>
            <Navigation></Navigation>
            <Container style={{ marginTop: 100, }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} style={{ marginTop: 90 }} >
                        <Typography variant="body1">
                            Registration Form
                        </Typography>

                        {!isLoading && <form onSubmit={handleLoginSubmit}>

                            <TextField focused sx={{ width: '90%', m: 1 }} label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                color="success" size="small"
                            />
                            <TextField focused sx={{ width: '90%', m: 1 }} label="Your E-mail"
                                name="email"
                                onBlur={handleOnBlur}
                                color="success" size="small"
                            />
                            <TextField sx={{ width: '90%', m: 1 }} label="Your Password"
                                type='password'
                                name="password"
                                onBlur={handleOnBlur}
                                color="success" size="small" focused />
                            <TextField sx={{ width: '90%', m: 1 }} label="Confirm Password"
                                type='password'
                                name="password2"
                                onBlur={handleOnBlur}
                                color="success" size="small" focused />

                            <Button type='submit' color="success" variant="contained" endIcon={<SendIcon />}>
                                Register
                            </Button> <br></br>
                            <NavLink style={{ textDecoration: 'none' }} to="/login"> <Button style={{ marginBottom: 200 }} variant='text'>
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
                            // style={{ width: '100%' }}
                            src={loginBg} alt='' />
                    </Grid>
                </Grid>

            </Container>
            <Footer></Footer>
        </Box>
    );
};

export default Register;