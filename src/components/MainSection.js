import { Box, styled, Typography } from "@mui/material";

function MainSection(){

    const BackgroundImage = styled(Box)(({theme}) => ({
        backgroundImage: 'url(https://as1.ftcdn.net/v2/jpg/03/47/87/08/1000_F_347870865_jk47tVjrDC62nefGzjUkcgQxoVp6M03w.jpg)',
        width: '100%',
        height: '100vh',
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover",
        backgroundPosition: "center",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative"
  }))

  const Heading = styled(Typography)(({theme}) => ({
    position: "absolute",
    top:"50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    color:"white",
    textShadow: '4px 4px 8px rgba(0, 0, 0, 0.9)',
    fontSize:{xs:'2rem', sm:'3rem', md:'4rem', lg:'5rem'}
  }))

return(
    <>
    <BackgroundImage>
        <Heading variant="h2" component="div" >Make Your Future Bright</Heading>
    </BackgroundImage>
    </>
)
}
export default MainSection;