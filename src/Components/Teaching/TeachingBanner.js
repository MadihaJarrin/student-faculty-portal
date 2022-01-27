import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bannerBg from '../../images/Teaching/banner.jpeg';
import bannerStudent from '../../images/Teaching/bannerPhoto1.png';


const banner = {
    background: `url(${bannerBg})`,
    backgroundColor: 'rgba(31, 183, 168, 0.5)',
    backgroundBlendMode: 'darken, luminosity',
    marginBottom: 150,

}
const TeachingBanner = () => {
    return (
        <Box style={banner} sx={{ width: '100%', height: '100%' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex', justifyContent: 'flex-start',
                        alignItems: 'center', textAlign: 'center'
                    }} >
                    <Box >
                        <Typography sx={{ fontWeight: 400, letterSpacing: 2, }} variant='h5' style={{ color: '#E7BB34' }}>

                        </Typography>

                        <Typography sx={{ textTransform: 'uppercase', fontWeight: 900, letterSpacing: 2, mt: 5 }} variant='h2' style={{ color: 'white' }} >
                            partner for <br />
                            your future<br />
                            of learning
                        </Typography>
                        <Typography sx={{ fontStyle: 'oblique', fontSize: 26, mb: 3 }} style={{ color: '#E7BB34' }}>
                            <br />
                            “Live as if you were to die tomorrow. Learn as if you were to live forever”

                        </Typography>
                        <Button size="large" color="error" variant="contained">LEARN MORE</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: '100%', height: 600, marginTop: 40 }}
                        src={bannerStudent} alt='' />
                </Grid>

            </Grid>
        </Box>
    );
};

export default TeachingBanner;