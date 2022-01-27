import { Container, Grid, Paper, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';
import React from 'react';

const Courses = ({ teachingCourse }) => {
    const { name, course1, course2, course3, space } = teachingCourse;

    return (
        <Container sx={{
            display: 'flex', justifyContent: 'flex-start',
            alignItems: 'center', textAlign: 'left',
            mt: 5
        }}>

            <Grid item xs={12} sm={12} md={12}

            >
                <Typography sx={{ textTransform: 'uppercase' }} style={{ color: '#0A588D', fontSize: 39, fontFamily: 'fantasy', fontWeight: '380' }} variant="h4" gutterBottom component="div" >
                    {name}
                </Typography>
                <Typography style={{
                    borderWidth: '8px',
                    borderBottomStyle: 'double', borderColor: '#EEAA2A',
                    marginTop: 20,
                    marginBottom: 20, width: 180
                }}>

                </Typography>
                <Typography style={{ fontSize: 18, fontWeight: '520' }} variant="body1" gutterBottom component="div" >
                    {course1} <br></br>
                    {course2}<br></br>
                    {course3}<br></br>
                </Typography >
                <Typography style={{ fontWeight: '520' }} gutterBottom >
                    {space} sits available
                </Typography>

            </Grid>
        </Container>
    );
};

export default Courses;