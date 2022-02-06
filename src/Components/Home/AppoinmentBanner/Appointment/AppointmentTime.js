import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Booking from './Booking/Booking';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

function HomeIcon(props) {
    return (
        <AccessAlarmsIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </AccessAlarmsIcon>
    );
}

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
        <Container style={{ marginBottom: 150 }}>
            <Typography style={{ fontSize: 30, fontFamily: 'sans-serif', fontWeight: '600', marginBottom: 50 }} sx={{ py: 5 }}> <HomeIcon fontSize="large" color="warning" />  Enrollment on {date.toDateString()}</Typography>
            <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={8}>
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