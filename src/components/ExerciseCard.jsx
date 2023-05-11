import { Box, Typography } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'


const ExerciseCard = ({exercise}) => {
  // console.log(exercise);
  const{gifUrl,name,id,bodyPart,target,equipment}=exercise;
  return (
    <Link className='exercise-card ' to={`/exercise/${id}`}>
  
        <img src={gifUrl} alt={name} loading="lazy"/>

        <Typography variant='h6' marginBottom="20px" mx='21px' fontWeight="bold"  color="black">
            {name}
        </Typography>

        <Box direction="column">
        <Box display="flex">
        <Typography sx={{ml:'21px', fontSize:'18px',  textTransform:"capitalize",color:"gray"}}>body Part: <span style={{fontWeight:"bold"}}>{bodyPart} </span> </Typography>

        </Box>
        <Box display="flex">
        <Typography sx={{ml:'21px', fontSize:'18px',  textTransform:"capitalize",color:"gray"}}>Target muscle: <span style={{fontWeight:"bold"}}>{target} </span> </Typography>

        </Box>
        <Box display="flex">
        <Typography sx={{ml:'21px', fontSize:'18px',  textTransform:"capitalize",color:"gray"}}> used Equipment: <span style={{fontWeight:"bold"}}>{equipment} </span> </Typography>

        </Box>
            
        </Box>
    </Link>
  )
}

export default ExerciseCard