import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import faculty from '../../../images/faculty.png';
import appBackground from '../../../images/AppointmentBackground.jpeg';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const appBg = {
    background: `url(${appBackground})`,
    marginTop: 220,
    // marginBottom: 220,
    backgroundColor: ' rgba(20, 88, 100, 0.8)',
    backgroundBlendMode: 'darken, luminosity'
}

const AppointmentBanner = () => {
    return (
        <Box style={appBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: -140 }}
                        src={faculty} alt=" " />
                </Grid>

                <Grid item xs={12} md={6} sx={{
                    display: 'flex', justifyContent: 'flex-start',
                    alignItems: 'center', textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant='h4' sx={{ mb: 3 }} style={{ color: 'white' }}>
                            Book an Enrollment
                        </Typography>
                        <Typography variant='h6' style={{ color: 'white', fontSize: 16, fontWeight: 300 }}>
                            if you have any queries or need any kind help, please make an enrollment now.
                        </Typography>
                        <Link to="/appointment" style={{ textDecoration: 'none' }}>
                            <Button sx={{ mt: 4 }} style={{ backgroundColor: '#BF970F' }} variant="contained"> Enrollment</Button></Link>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppointmentBanner;