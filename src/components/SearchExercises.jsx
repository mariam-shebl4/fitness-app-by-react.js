import { Box, Button, Stack, TextField, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { exrciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";


const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exrciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    
      // console.log(bodyPartsData);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",exrciseOptions
      );
// console.log(exerciseData);
      const searchExercises = exerciseData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchExercises);
    }
  };

  return (
  
      
    <Stack alignItems="center" mt="37px" justifyContent="center" >
      <Typography
        textAlign="center"
        
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
      >
        Awesome <span style={{color:"orange",fontWeight:"800"}}> Exercises </span>You <br />
        Should Know
      </Typography>
      <Box mb="72px" mx="5rem" position="relative">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "900px", xs: "20rem", sm: "30rem" },
            borderRadius:'40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          label="Search Exercises"
          type="text"
          color="warning"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#e65100",
            color: "#fff",
            textTransform: "none",
            width: { lg: "170px", xs: "5rem" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right:'0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  
  );
};

export default SearchExercises;
