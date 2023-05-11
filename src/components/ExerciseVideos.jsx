import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "../swiper.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import Loader from "./Loader";
const ExerciseVideos = ({ name, exerciseVideos }) => {
  // console.log(exerciseVideos);
  if (!exerciseVideos.length) return <Loader />;
  return (
    <Box>
      <Typography variant="h4" mt={3} mx={4}>
        Watch <span style={{ color: "orange" }}>{name} </span>
        related videos
      </Typography>

      {/* <Stack justifyContent="center" flexWrap='wrap' alignItems='center' sx={{flexDirection:{lg:'row'}, gap:{lg:'10px', xs:'0'},width:"100%"}}> */}
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
        {exerciseVideos?.slice(0, 10).map((item, idx) => (
          <SwiperSlide>
            <a
              key={idx}
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel=" noreferrer"
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                {/* //publishedTimeText, channelName, viewCountText, title */}
                <Typography
                  textAlign="justify"
                  color="black"
                  variant="subtitle1"
                >
                  {item.video.title}
                </Typography>
                <br />
                <hr style={{ color: "gray" }} />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  flex
                  alignItems="center"
                  my={1}
                >
                  <Typography color="#383935" variant="subtitle2">
                    {item.video.channelName}
                  </Typography>
                  <Typography variant="subtitle2" fontSize="12px" color="gray">
                    {item.video.publishedTimeText}
                  </Typography>
                </Stack>
              </Box>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ExerciseVideos;
