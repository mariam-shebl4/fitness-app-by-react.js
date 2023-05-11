

import React from 'react'
import BodyPart from './BodyPart'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination ,Navigation} from "swiper";



const HorizontalScrollbar = ({data,setBodyPart,bodyPart}) => {
  return (

    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Navigation]}
        className="mySwiper"
        breakpoints= {{
    // when window width is >= 320px
    "320": {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    "480": {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    "640": {
      slidesPerView: 6,
      spaceBetween: 40
    }
}  }
      >
        {data.map((item)=>(
        

          <SwiperSlide>
            {/* {item} */}
             <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
          </SwiperSlide>
          
        
        )
        )}
  
      </Swiper>
  )
}

export default HorizontalScrollbar