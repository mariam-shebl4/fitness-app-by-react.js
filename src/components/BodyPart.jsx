
import { Stack, Typography } from '@mui/material'
import React from 'react'
import Icon from '../assets/icons/gym.png'

const BodyPart = ({item,bodyPart,setBodyPart}) => {
  
  return (
  
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    sx={{
      borderTop: bodyPart === item? '4px solid orange':'',
      backgroundColor:'#fff',
      borderBottomLeftRadius:'20px',
      width:'150px',
      height:'150px',
      cursor:'pointer',
      gap:'47px',
      transition:"all ease-in-out .5s"
      
    }}

onClick={()=> {setBodyPart(item)
window.scrollTo({top:1800, left:100,
behavior:'smooth'})
}}
  
    >
    <img 
    className='bodyPart-card'
    
    src={Icon} alt="dumbbell" style={{width:'40px', height:'40px'}}  />
    <Typography>

    {item}
    </Typography>
    </Stack>
  
  )
}

export default BodyPart