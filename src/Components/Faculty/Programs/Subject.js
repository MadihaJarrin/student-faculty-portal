import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';

const Subject = ({ program }) => {
    const { name, description, img } = program;
    return (

        <Grid item xs={6} sm={6} md={6} sx={{ mt: 10 }}>
            <Card sx={{ maxWidth: 500, height: 260 }} style={{ background: '#F4B43A', color: 'white' }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="150"
                        image={img}
                        alt=""
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    );
};

export default Subject;