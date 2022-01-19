import { Container, Grid } from '@mui/material';
import React from 'react';
import appHeader from '../../../../images/appointment.jpeg'
import Calendar from '../../../Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {
    // const [date, setDate] = React.useState(new Date());

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, height: 500 }}
                        src={appHeader} alt='' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Calendar
                        date={date} setDate={setDate}
                    ></Calendar>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;