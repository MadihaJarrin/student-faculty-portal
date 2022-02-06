import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import campus from '../../images/campusBuilding.jpeg';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const About = () => {
    return (
        <Box sx={{ flexGrow: 1, mt: 10, mb: 20 }}>
            <Grid container spacing={2}>
                <Grid item xs={6} md={6}
                    sx={{
                        display: 'flex', justifyContent: 'flex-start',
                        alignItems: 'center', textAlign: 'left',
                    }} style={{ paddingLeft: 200 }}
                >
                    <Box >
                        <Typography variant='h5' style={{ fontWeight: 400, color: '#0D305C' }} >

                            <HomeIcon fontSize="large" color="warning" /> About Us
                        </Typography>
                        <Typography variant='h4' sx={{ textTransform: 'uppercase' }} style={{ fontWeight: 600, color: '#0D305C', marginTop: 50 }}>
                            Great history of our campus
                        </Typography>
                        <Typography style={{
                            borderWidth: '8px',
                            borderBottomStyle: 'double', borderColor: '#EEAA2A',
                            marginTop: 20,
                            marginBottom: 20, width: 250
                        }}>

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
                            style={{
                                width: 450, height: 500,
                                borderRightStyle: 'solid', borderTopStyle: 'solid', borderWidth: '20px', borderColor: 'yellow'
                            }}
                            src={campus} alt='' />
                    </Typography>
                </Grid>

            </Grid>
        </Box>
    );
};

export default About;