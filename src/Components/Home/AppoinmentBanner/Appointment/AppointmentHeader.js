import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import appHeader from '../../../../images/appointment.jpeg'
import Calendar from '../../../Shared/Calendar/Calendar';
import bannerBg from '../../../../images/enrollment/banner.jpg';
import bannerStudent from '../../../../images/Teaching/bannerPhoto.png';

const banner = {
    background: `url(${bannerBg})`,
    backgroundColor: 'rgba(31, 183, 168, 0.5)',
    backgroundBlendMode: 'darken, luminosity',
    marginBottom: 150,

}

const AppointmentHeader = ({ date, setDate }) => {
    // const [date, setDate] = React.useState(new Date());

    return (
        <>
            <img
                style={{ width: '100%', height: 700 }}
                src={bannerBg} alt='' />
            <Container>
                <Grid style={{ marginTop: 100, marginBottom: 100 }} container spacing={5}>
                    <Grid item xs={12} md={6}>
                        <img
                            style={{
                                width: 500, height: 620,
                                borderLeftStyle: 'solid', borderTopStyle: 'solid', borderWidth: '25px', borderColor: 'yellow',
                            }}

                            src={appHeader} alt='' />
                    </Grid>
                    <Grid style={{
                        borderRightStyle: 'solid', borderBottomStyle: 'solid ', borderWidth: '25px', borderColor: 'yellow',
                        marginTop: 40,
                    }}
                        item xs={12} md={6}>
                        <Calendar
                            date={date} setDate={setDate}
                        ></Calendar>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default AppointmentHeader;