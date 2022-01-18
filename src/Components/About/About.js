import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import campus from '../../images/campusBuilding.jpeg'

const About = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 20 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex', justifyContent: 'flex-start',
                        alignItems: 'center', textAlign: 'center'
                    }}
                >
                    <Box >
                        <Typography variant='h4' sx={{ textTransform: 'uppercase' }} style={{ fontWeight: 600, color: '#0D305C' }}>
                            Great history of our campus
                        </Typography>
                        <Typography variant='h6' style={{ fontSize: 16, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet.
                            <br></br>
                            <br></br>
                            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
                        </Typography>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography>
                        <img
                            sx={{ borderRight: 1, }}
                            style={{ width: 480 }}
                            src={campus} alt='' />
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    );
};

export default About;