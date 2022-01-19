import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import cse from '../../../images/cse.jpeg';
import bio from '../../../images/bio.jpeg';
import chem from '../../../images/chemistry.jpeg';
import architec from '../../../images/architecture.jpeg';
import Subject from './Subject';
import SvgIcon from '@mui/material/SvgIcon';
import SelectAllIcon from '@mui/icons-material/SelectAll';



const programs = [
    {
        key: '1',
        name: 'Computer Science & Engineering',
        description: 'Education is the backbone of a nation',
        img: cse

    },
    {
        key: '2',
        name: 'Biomedical Engineering',
        description: 'Education is the backbone of a nation',
        img: bio

    },
    {
        key: '3',
        name: 'Chemistry & Physics',
        description: 'Education is the backbone of a nation',
        img: chem

    },
    {
        key: '4',
        name: 'Architecture Engineering',
        description: 'Education is the backbone of a nation',
        img: architec

    }

]
function HomeIcon(props) {
    return (
        <SelectAllIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SelectAllIcon>
    );
}

const Programs = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <Grid item xs={6} md={8}>
                        <Typography variant='h5' style={{ fontWeight: 400, color: '#0D305C', marginTop: 80 }} >

                            <HomeIcon fontSize="large" color="warning" /> Programs
                        </Typography>
                        <Typography variant='h4' sx={{ textTransform: 'uppercase' }} style={{ fontWeight: 600, color: '#0D305C', marginTop: 50, marginBottom: 20 }}>
                            Our Faculty Programs
                        </Typography>
                        <Typography style={{
                            borderWidth: '10px',
                            borderBottomStyle: 'dotted', borderColor: '#EEAA2A',
                            width: 200,
                            margin: '0 auto'

                        }}>

                        </Typography>
                        <Typography variant='h6' style={{ fontSize: 16, fontWeight: 300, marginTop: 20, paddingLeft: 200, paddingRight: 200 }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet.
                            <br></br>

                        </Typography>
                    </Grid>

                </Grid>
            </Box>
            <Container>
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={2}>
                        {
                            programs.map(program => <Subject
                                key={program.key}
                                program={program}
                            ></Subject>)

                        }
                    </Grid>
                </Box>

            </Container>
        </>
    );
};

export default Programs;