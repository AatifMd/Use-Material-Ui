import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 4,
                    }}
                >
                    <Typography variant="h6" component="div">
                        Coaching Classes
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <IconButton color="inherit" href="https://facebook.com">
                            <Facebook />
                        </IconButton>
                        <IconButton color="inherit" href="https://twitter.com">
                            <Twitter />
                        </IconButton>
                        <IconButton color="inherit" href="https://linkedin.com">
                            <LinkedIn />
                        </IconButton>
                        <IconButton color="inherit" href="https://instagram.com">
                            <Instagram />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                    }}
                >
                    <Box sx={{ mb: { xs: 2, md: 0 } }}>
                        <Typography variant="subtitle1" component="div">
                            Quick Links
                        </Typography>
                        <Box>
                            <Link href="/" color="inherit" underline="hover">
                                Home
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/about" color="inherit" underline="hover">
                                About Us
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/courses" color="inherit" underline="hover">
                                Courses
                            </Link>
                        </Box>
                        <Box>
                            <Link href="/contact" color="inherit" underline="hover">
                                Contact Us
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{ mb: { xs: 2, md: 0 } }}>
                        <Typography variant="subtitle1" component="div">
                            Contact Us
                        </Typography>
                        <Typography variant="body2">
                            Email: info@coachingclasses.com
                        </Typography>
                        <Typography variant="body2">
                            Phone: 1234567890
                        </Typography>
                        <Typography variant="body2">
                            Address: Hidayatullah Road, Camp, Pune
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 4,
                    }}
                >
                    <Typography variant="body2" color="inherit">
                        &copy; {new Date().getFullYear()} Coaching Classes. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
