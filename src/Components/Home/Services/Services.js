import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import education from '../../../images/education.png';
import professional from '../../../images/professional.png';
import research from '../../../images/research.png';
import management from '../../../images/management.png';


const services = [
    {
        name: 'Education',
        description: 'Education is the backbone of a nation',
        img: education
    },
    {
        name: 'Professional',
        description: 'Education is the backbone of a nation',
        img: professional
    },
    {
        name: 'Research',
        description: 'Education is the backbone of a nation',
        img: research
    },
    {
        name: 'Management',
        description: 'Education is the backbone of a nation',
        img: management
    }

]

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Container>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>

            </Container>
        </Box>
    );
};

export default Services;