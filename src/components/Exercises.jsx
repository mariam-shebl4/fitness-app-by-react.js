import React , {useEffect,useState}from 'react'
import Pagination from '@mui/material/Pagination';
import {fetchData, exrciseOptions} from '../utils/fetchData'
import { Box, Stack, Typography } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';


const Exercises = ({setExercises,bodyPart,exercises}) => {
  
  const [currentPage, setCurrentPage] = useState(1)


const exercisesPerPage = 12;

const indexOfLastExercise= currentPage* exercisesPerPage;

const indexOfFirstExercise= indexOfLastExercise- exercisesPerPage;

const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate=(e, value)=>{
    setCurrentPage(value)
    window.scrollTo({top:1600, behavior:'smooth'})

  }

  useEffect(() => {
    const fetchExercisesData= async()=>{
      let exercisesData =[];

      if(bodyPart ==='all'){
        exercisesData=  await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",exrciseOptions
        );
      }
      else{
        exercisesData=  await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exrciseOptions
        );
      }
    
      setExercises(exercisesData)
    }


    fetchExercisesData()
  }, [bodyPart])
  

  // console.log(exercises);
  if(!currentExercises.length) return <Loader/>
  return (
    <div id="exercises">
    <Box
    id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt='50px'
    p='20px'
    >
      <Typography textAlign="center"
        
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px">
        Showing <span style={{color:"orange", fontWeight:"bold"}}> {bodyPart}</span> Results 
      </Typography>

      
      <Stack direction='row' sx={{gap:{lg:'2rem', xs:'50px'}}}
      flexWrap="wrap" justifyContent="center"
      >
        {currentExercises.map((exercise, index)=>(
          <ExerciseCard key={index} exercise={exercise} />
        
        ))}
      </Stack>

      <Stack spacing={2} mt="100px" alignItems="center">
    {exercises.length> 9 &&  (<Pagination count={Math.ceil(exercises.length / exercisesPerPage )} variant="outlined" defaultPage={1} 
      page={currentPage}
      onChange={paginate}
    />)}
      
    </Stack>
    </Box>

    </div>
  )
}

export default Exercises