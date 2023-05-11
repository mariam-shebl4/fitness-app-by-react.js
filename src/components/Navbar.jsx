import { Stack } from '@mui/material';
import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
    <Stack display="flex" flexDirection={{lg:"row",sm:"row", mobile:"column"}} justifyContent="none" sx={{gap:{ sm:'122px', xs:'40px'}, mt:{sm:'32px', xs:'20px'},background:"white"}} px="20px">
<Link to="/" style={{fontSize:'2rem', fontFamily:"monospace", color:"orange"}}>
  {/* <img src={Logo} alt="Logo" style={{width:'48px', height:'48px', margin:'0 20px'}} /> */}
  
  Home
  
</Link>

    </Stack>
  )
}

export default Navbar