import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Form from './Form/Form';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
}));

const darkTheme = createTheme({ palette: { mode: 'dark' } });



const Booking = ({ slot, date }) => {
    const { name, time, space } = slot;

    const [openForm, setOpenForm] = React.useState(false);
    const handleFormOpen = () => setOpenForm(true);
    const handleFormClose = () => setOpenForm(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4} sx={{ py: 4 }} >
                {/* <Paper elevation={3} sx={{ py: 4 }}> */}

                <Typography variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography variant="h6" gutterBottom component="div" >
                    {time}
                </Typography >
                <Typography gutterBottom >
                    {space} sits available
                </Typography>
                <Button onClick={handleFormOpen} style={{ background: '#E78C2B' }} variant='contained'  >
                    Form
                </Button>
                {/* </Paper> */}
            </Grid>
            <Form
                slot={slot}
                openForm={openForm}
                handleFormClose={handleFormClose}
                date={date}
            >
            </Form>
        </>
    );
};

export default Booking;