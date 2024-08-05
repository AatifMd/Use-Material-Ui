import { Box, Container, Typography, styled } from "@mui/material";

function About(){

    const Container = styled(Box)(({theme}) => ({
        display:"flex",
        
        alignItems:"center",
        justifyContent: "space-between",
        flexWrap:"wrap",
        padding: theme.spacing(4),
    }))

    const Image = styled('img')(({theme})=>({
        width:"100%",
        maxWidth:"500px",
        height:"auto",
        objectFit:"cover",
    }))
    const TextSection = styled(Box)(({theme}) => ({
        flex:1,
        padding:theme.spacing(2),
       
    }))
return (
    <Container sx={{flexDirection:{ xs: 'column', md: 'row' }}}>
        <Box sx={{flex:1, display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Image src="https://media.istockphoto.com/id/1494812295/photo/teamwork-manager-portrait-and-diversity-of-office-team-happy-about-hr-collaboration-we-are.webp?b=1&s=170667a&w=0&k=20&c=6cnpg7ioJ30NQhl4Aq2uloQyHZqQsitSM08x1DsMdFM=" alt="About Us"/>
        </Box>
        <TextSection>
            <Typography variant="h4" component="h2" gutterBottom>About Us</Typography>
            <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
                    laoreet fermentum, ligula elit sagittis ligula, at feugiat libero metus in nunc. Donec
                    interdum risus ac odio scelerisque, vel aliquam velit suscipit. Integer sit amet bibendum
                    metus. Morbi ac mi a libero iaculis dictum. Nulla facilisi. Curabitur in bibendum turpis.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et
                    laoreet fermentum, ligula elit sagittis ligula, at feugiat libero metus in nunc. Donec
                    interdum risus ac odio scelerisque, vel aliquam velit suscipit. Integer sit amet bibendum
                    metus. Morbi ac mi a libero iaculis dictum. Nulla facilisi. Curabitur in bibendum turpis.
            </Typography>
        </TextSection>
    </Container>
)
}
export default About;