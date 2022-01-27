import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Courses from './Courses';
import Navigation from '../Shared/Navigation/Navigation'
import TeachingBanner from './TeachingBanner';

const teachingCourses = [
    {
        id: 1,
        name: 'Graduate Courses ',
        course1: 'CSE-115 : Programing Language I ( C )',
        course2: 'CSE-173 : Discrete Mathematics',
        course3: 'Eng-111 : Public Speaking ',
        // courses: {
        //     course1: 'CSE-115 : Programing Language I ( C )',
        //     course2: 'CSE-173 : Discrete Mathematics',
        //     course3: 'Eng-111 : Public Speaking ',
        // },
        space: 35

    },
    {
        id: 2,
        name: 'Undergraduate Courses  ',
        course1: 'CSE-215 : Programing Language II ( Java )',
        course2: 'CSE-225 : Data Structures & Algorithm ',
        course3: 'Phy-107 : Particle & Energy ',
        // courses: {
        //     course1: 'CSE-215 : Programing Language II ( Java )',
        //     course2: 'CSE-225 : Data Structures & Algorithm ',
        //     course3: 'Phy-107 : Particle & Energy ',
        // },
        space: 35
    },
    {
        id: 3,
        name: 'Labratory Courses',
        course1: 'CSE-215 : Poject About Student Management System ( Java )',
        course2: 'CSE-115 : Making a Calculator ( C language )',
        course3: 'Phy-107 : Making an Electronic Circuit ',
        // courses: {
        //     course1: 'CSE-215 : Poject About Student Management System ( Java )',
        //     course2: 'CSE-115 : Making a Calculator through C language ',
        //     course3: 'Phy-107 : Making an Electronic Circuit ',
        // },
        space: 35
    },

]

const Teaching = () => {
    return (
        <>
            <Navigation></Navigation>
            <TeachingBanner></TeachingBanner>
            <Container>
                <Box sx={{ flexGrow: 1 }}>

                    <Grid container spacing={2}>
                        {
                            teachingCourses.map(teachingCourse => <Courses
                                key={teachingCourses.id}
                                teachingCourse={teachingCourse}

                            ></Courses>)
                        }
                    </Grid>
                </Box>

            </Container></>
    );
};

export default Teaching;