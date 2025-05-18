import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NotFound: React.FC = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                // px: 2,
                textAlign: 'center',
                background: 'linear-gradient(135deg, #6556FF 0%, #43C639 100%)',
            }}
        >
            <Box
                sx={{
                    width: { xs: '80%', sm: '60%', md: '40%' },
                    maxWidth: 400,
                    // mb: 3,
                }}
            >
                <DotLottieReact
                    src="/animations/not-found.lottie"
                    autoplay
                    loop
                    style={{ width: '100%', height: '100%' }}
                />
            </Box>
            <Typography
                variant="h1"
                sx={{
                    fontSize: { xs: '3rem', sm: '5rem', md: '7rem' },
                    fontWeight: 'bold',
                    color: '#fff',
                }}
            >
                404
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    // mb: 4,
                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                    color: '#fff',
                }}
            >
                Oops! The page you’re looking for doesn’t exist.
            </Typography>
            <Button
                component={RouterLink}
                to="/"
                variant="contained"
                size="large"
                sx={{
                    px: 4,
                    // py: 1.5,
                    bgcolor: '#fff',
                    color: '#000',
                    '&:hover': { bgcolor: '#f0f0f0' },
                }}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;
