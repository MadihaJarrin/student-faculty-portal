import { Container, Grid, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <Box bgcolor="text.secondary" color="white">

                <Container maxWidth='lg'>
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Help
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Contact
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Support
                                </Link>
                            </Box>

                            <Box>
                                <Link href="/" color="inherit">
                                    Privacy
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Accouont
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Login
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Register
                                </Link>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}>
                                Backup
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    History
                                </Link>
                            </Box>
                            <Box>
                                <Link href="/" color="inherit">
                                    Roll
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;