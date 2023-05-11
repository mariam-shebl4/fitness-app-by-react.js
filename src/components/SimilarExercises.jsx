import { Box, Typography } from "@mui/material";
import React from "react";
import "../swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Loader from "./Loader";
import { Link } from "react-router-dom";

const SimilarExercises = ({ equipmentExercise, targetMuscleExercise, id }) => {
  // console.log(targetMuscleExercise);
  if (!targetMuscleExercise.length) return <Loader />;

  return (
    <Box>
      <Typography variant="h4" mt={3} ml={4}>
        Exercises that <span style={{ color: "orange" }}>target </span> the same
        musecle
      </Typography>
      <Swiper
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiperDetail"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {targetMuscleExercise
          ?.slice(1, 5)
          .map(({ gifUrl, name, target, equipment, bodyPart ,id}) => (
            <SwiperSlide>
            <Link style={{textDecoration:"none"}} to={`/exercise/${id}`}>

              <Box>
                <img
                  src={gifUrl}
                  alt={name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                {/* <Box>
                  <Typography>{target}</Typography>
                  <Typography>{equipment}</Typography>
                  <Typography>{bodyPart}</Typography>
                  <Typography>{name}</Typography>
                </Box> */}
                <Box>
                  <Typography
                    variant="h6"
                    marginBottom="20px"
                    mx="21px"
                    fontWeight="bold"
                    color="black"
                  >
                    {name}
                  </Typography>

                  <Box direction="column">
                    <Box display="flex">
                      <Typography
                        sx={{
                          ml: "21px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "gray",
                        }}
                      >
                        body Part:{" "}
                        <span style={{ fontWeight: "bold" }}>{bodyPart} </span>{" "}
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          ml: "21px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "gray",
                        }}
                      >
                        Target muscle:{" "}
                        <span style={{ fontWeight: "bold" }}>{target} </span>{" "}
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          ml: "21px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "gray",
                        }}
                      >
                        {" "}
                        used Equipment:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {equipment}{" "}
                        </span>{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
            </SwiperSlide>
          ))}
      </Swiper>

      <Typography variant="h4" mt={3} ml={4}>
        The used <span style={{ color: "orange" }}> Equipment </span> for the
        exercise
      </Typography>

      <Swiper
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiperDetail"
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {equipmentExercise
          ?.slice(1, 5)
          .map(({ gifUrl, name, target, equipment, bodyPart ,id}) => (
            <SwiperSlide>
            <Link  style={{textDecoration:"none"}}  to={`/exercise/${id}`}>

              <Box>
                <img
                  src={gifUrl}
                  alt={name}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <Box>
                  <Typography
                    variant="h6"
                    marginBottom="20px"
                    mx="21px"
                    fontWeight="bold"
                    color="black"
                  >
                    {name}
                  </Typography>

                  <Box direction="column">
                    <Box display="flex">
                      <Typography
                        sx={{
                          ml: "21px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "gray",
                        }}
                      >
                        body Part:{" "}
                        <span style={{ fontWeight: "bold" }}>{bodyPart} </span>{" "}
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          ml: "21px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "gray",
                        }}
                      >
                        Target muscle:{" "}
                        <span style={{ fontWeight: "bold" }}>{target} </span>{" "}
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <Typography
                        sx={{
                          ml: "21px",
                          fontSize: "18px",
                          textTransform: "capitalize",
                          color: "gray",
                        }}
                      >
                        {" "}
                        used Equipment:{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {equipment}{" "}
                        </span>{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
};

export default SimilarExercises;
