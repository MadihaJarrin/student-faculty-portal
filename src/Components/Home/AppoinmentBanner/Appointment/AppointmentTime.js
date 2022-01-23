import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Booking from './Booking/Booking';

const slots = [
    {
        id: 1,
        name: 'CSE',
        time: '10.00 AM - 04.00 PM',
        space: 10

    },
    {
        id: 2,
        name: 'Biomedical',
        time: '10.00 AM - 04.00 PM',
        space: 10
    },
    {
        id: 3,
        name: 'Chemistry & Physics',
        time: '10.00 AM - 04.00 PM',
        space: 10
    },
    {
        id: 4,
        name: 'Architecture',
        time: '10.00 AM - 04.00 PM',
        space: 10
    },
    {
        id: 5,
        name: 'English',
        time: '10.00 AM - 04.00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Microbiology',
        time: '10.00 AM - 04.00 PM',
        space: 10
    }

]

const AppointmentTime = ({ date }) => {
    return (
        <Container>
            <h2> Enrollment on {date.toDateString()}</h2>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={2}>
                    {
                        slots.map(slot => <Booking
                            key={slots.id}
                            slot={slot}
                            date={date}
                        ></Booking>)
                    }
                </Grid>
            </Box>

        </Container>
    );
};

export default AppointmentTime;