'use client'
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/css/multiSlider.css';
import { Pagination } from 'swiper/modules';
import { previous_items } from '@/assets/data/previous_data';
import Typography from '../Typography';
import Image from 'next/image';
import { useState } from 'react';
import useWindowSize from '../../app/hooks/UseWindowSize';

const PreviousCard = () => {
  const { width } = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(3);
  useEffect(() => {
    if (width > 1520) setCurrentSlide(4)
    else if (width > 1024) setCurrentSlide(3)
    else if (width > 768) setCurrentSlide(2)
    else if (width > 400) setCurrentSlide(1)
  }, [width])
  return (
    <>

      <Swiper
        slidesPerView={currentSlide}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {
          previous_items.map((item, key) => (
            <SwiperSlide className='bg-slate-400 dark:bg-slate-800 gap-15' key={key}>
              <div className="flex h-full">
                <div className="flex flex-col gap-10 justify-between ">
                  <Image src={item.Img} width={500} height={500} alt={item.title} className='' layout='fill ' objectFit='cover' />
                  <div className='h-[300px]'>
                    <Typography size='h4'>{item.title}</Typography>
                    <Typography>{item.content}</Typography>
                  </div>
                </div>
              </div>
            </SwiperSlide>))
        }
      </Swiper>
    </>
  )
}

export default PreviousCard