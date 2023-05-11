import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-scroll';

const HeroBanner = () => {
  return (
    
    <Stack className='cover' sx={{
      pt:{lg:'6rem', xs:'2rem'},
      justifyContent:"center",
      alignItems:"center",
      borderRadius:{xs:"0",md:"0px 0px 0px 500px "}
    }} position="relative" p="20px" >

    <Box sx={{width:"50rem", textAlign:"center", zIndex:"2"}}>

      <Typography color="#FEC620" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography color="white" fontWeight={700} sx={{fontSize:{lg:'44px', xs:'40px'}}} mb="23px" mt="30px">
        Sweat, Smile <br/> and Repeat
      </Typography>
      <Typography color="white" fontSize="22px" lineHeight="35px" mb={3}>
        Check out the most effective exercises
      </Typography>
    
      <Link to="exercises" smooth={true} duration={500}>

      <Button  sx={{padding:'15px', backGroundColor:'red',zIndex:"2"}} variant='contained' color='warning' href="#exercise" mb={4}>Explore Exercises</Button>
      </Link>
  
 

    </Box>
 <Typography
 fontWeight={700} color="#FEC620" sx={{opacity:0.1, display:{lg:'block', xs:'none',marginTop:"-200px",}}} fontSize='250px'
 >
  Exercise
 </Typography>
      {/* <img src={Banner} alt="banner" className='hero-banner-img'/> */}
    </Stack>
  )
}

export default HeroBanner