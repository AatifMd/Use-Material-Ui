import { Box, Container, Typography, CardMedia, CardActions, Button } from "@mui/material";

function Courses(){

    const courses = [
        {
            title: 'NEET',
            description: 'The best NEET coaching in India, offering the crash course, provides access to meticulously prepared NEET exam materials, practice papers, recorded lessons, and mock exams.',
            image: 'https://hips.hearstapps.com/hmg-prod/images/types-of-doctors-1600114658.jpg?crop=1xw:0.8425829875518672xh;center,top&resize=1200:*'
        },
        {
            title: 'JEE',
            description: ' IIT JEE coaching institutes offer a range of benefits, including better time management and exam strategies, improved understanding of concepts and problem-solving skills, exposure to different types of questions, and motivation and confidence building',
            image: 'https://blogcdn.aakash.ac.in/wordpress_media/2022/04/Blog-Image-4.jpg'
        },
        {
            title: 'UGC NET',
            description: 'UGC NET coaching institutes provide structured study material, mock tests, and guidance from experienced faculty to help candidates prepare for the exam.',
            image: 'https://www.india.com/wp-content/uploads/2023/11/UGC-NET-Syllabus-to-be-revised.jpg'
        },
        {
            title: 'Digital Marketing',
            description: 'Understand SEO, content marketing, and social media strategies to grow businesses online.',
            image: 'https://rdsdigital.in/wp-content/uploads/2022/01/RDS-1-02-212.webp'
        }
    ];
return(
    <Container sx={{paddingY : 4}}>
        <Typography variant="h4" gutterBottom align="center">Our Courses</Typography>
        <Box sx={{display:"flex", flexDirection:'column', gap:4}}>
            {
                courses.map((course, index) =>(
                    <Box key={index} sx={{
                        display:"flex",
                        flexDirection:{ xs: 'column', sm: 'row' },
                        alignItems:"center",
                        gap: 2,
                        padding: 2,
                        border: '1px solid #ddd',
                        borderRadius: 2,
                        boxShadow: 2,
                    }}>
                        <CardMedia
                            component="img"
                            sx={{ width: { xs: '100%', sm: '200px' }, height: '200px', objectFit: 'cover' }}
                            image={course.image}
                            alt={course.title}
                        />
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                            <Typography variant="h6" gutterBottom>
                                {course.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {course.description}
                            </Typography>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Box>
                    </Box>
                ))
            }
        </Box>
    </Container>
)
}
export default Courses;