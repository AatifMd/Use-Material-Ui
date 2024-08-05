import React from 'react';
import { Box, Typography, Avatar, styled, Container } from '@mui/material';

const teachers = [
    {
        name: 'Mr Soheloddin',
        subject: 'Mathematics',
        imageUrl: '/images/sohel.jfif'
    },
    {
        name: 'Mr Mohammad Rashid',
        subject: 'Science',
        imageUrl: '/images/Rashid.jpg'
    },
    {
        name: 'Mr Mohammad Kashif',
        subject: 'English',
        imageUrl: '/images/kashif.jpg'
    },
    {
        name: 'Mohammad Aatif',
        subject: 'History',
        imageUrl: '/images/Aatif.jpg'
    }
];

const TeacherCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    margin: theme.spacing(2),
    boxShadow: theme.shadows[3],
    borderRadius: theme.shape.borderRadius,
    width: '200px',
    textAlign: 'center'
}));

const Teacher = () => {
    return (
        <Container>
            <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ marginTop: 4 }}>
                Our Teachers
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                {teachers.map((teacher, index) => (
                    <TeacherCard key={index}>
                        <Avatar alt={teacher.name} src={teacher.imageUrl} sx={{ width: 100, height: 100, marginBottom: 2 }} />
                        <Typography variant="h6" component="h3">
                            {teacher.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {teacher.subject}
                        </Typography>
                    </TeacherCard>
                ))}
            </Box>
        </Container>
    );
};

export default Teacher;
