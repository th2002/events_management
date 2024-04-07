'use client';

import React from 'react';
import { events } from '@/constants';
import EventCard from './EventCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const EventsList = () => {
  return (
    <div className="flex w-full justify-center overflow-x-hidden md:justify-between">
      <div className="grid w-fit grid-cols-1 gap-10 md:w-full md:grid-cols-2 md:justify-between md:gap-8 lg:flex">
        <Swiper
          breakpoints={{
            0: {
              width: 0,
              slidesPerView: 1
            },
            768: {
              width: 768,
              slidesPerView: 2
            },
            1280: {
              width: 1280,
              slidesPerView: 3
            }
          }}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <EventCard
                styles={'w-[376px] h-[353px]'}
                imgWidth={376}
                imgHeight={207}
                img={event?.url}
                date={event?.date}
                title={event?.title}
                price={event?.price}
                like={event?.like}
                positionHeart={'-bottom-3 left-5'}
                location={event?.location}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default EventsList;
