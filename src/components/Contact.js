import { Container, Typography,Box, TextField, Button } from "@mui/material"; 

function Contact(){
    return(
        <>
        <Container sx={{padding:4}}>
            <Typography variant="h4" component="h1" gutterBottom align="center">
                Contact Us
            </Typography>
            <Box component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap:2,
                maxWidth: 500,
                margin: '0 auto',
            }}
            >
                <TextField label = "Name" variant="outlined" fullWidth/>
                <TextField label = "Email" variant="outlined" type="email" fullWidth/>
                <TextField label ="Massage" variant="outlined" multiline rows={4} fullWidth/>
                <Button type="submit" sx={{backgroundColor:'blue', color:"white"}} >Send Massage</Button>
            </Box>
        </Container>
        </>
    )
}
export default Contact;