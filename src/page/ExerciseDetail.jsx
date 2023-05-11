import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { exrciseOptions, fetchData ,youtubeOptions} from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';


const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})

  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercise, setTargetMuscleExercise] = useState([])
  const [equipmentExercise, setEquipmentExercise] = useState([])

  const {id}= useParams();
  
  useEffect(() => {
    //https://exercisedb.p.rapidapi.com/exercises/exercise/%7Bid%7D
    
    const fetchExercisesData= async()=>{
      window.scrollTo({top:0,
        behavior:'smooth'})
        
      const exerciseDbUrl='https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exrciseOptions);
      setExerciseDetail(exerciseDetailData);

      //youtube fetch

      //'https://youtube-search-and-download.p.rapidapi.com/video/related'

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents)

      //target muscelses

      const targetMuscleExerciseData= await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exrciseOptions);
      setTargetMuscleExercise(targetMuscleExerciseData)

      //equipments

      const equipmentExerciseData= await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exrciseOptions);
      setEquipmentExercise(equipmentExerciseData);

    }

    fetchExercisesData()
  }, [id])
  
  // console.log(exerciseDetail);
  return (
  <>

    <Navbar/>
    <Box>
    <Detail  exerciseDetail={exerciseDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
    <SimilarExercises targetMuscleExercise={targetMuscleExercise} equipmentExercise={equipmentExercise} id={id}/>
    </Box>
  </>
  )
}

export default ExerciseDetail