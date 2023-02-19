import React from 'react'
import Av from '../../assets/me.png'
import './testimonials.css'
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
function testimonials() {
  const data = [
    {
      id:1,
      avater: Av,
      name:'Demo Client',
      review :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lorem eu neque interdum lacinia. Suspendisse faucibus purus ac risus dignissim consectetur. '
    },
    {
      id:1,
      avater: Av,
      name:'Demo Client',
      review :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lorem eu neque interdum lacinia. Suspendisse faucibus purus ac risus dignissim consectetur. '
    },
    {
      id:1,
      avater: Av,
      name:'Demo Client',
      review :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lorem eu neque interdum lacinia. Suspendisse faucibus purus ac risus dignissim consectetur. '
    },
    {
      id:1,
      avater: Av,
      name:'Demo Client',
      review :'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum lorem eu neque interdum lacinia. Suspendisse faucibus purus ac risus dignissim consectetur. '
    }
  ]
  return (
    <section id='testimonial' >
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper 
      className='container testimonials_conatainer'
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}
      >
          {
            data.map(({avater,name,review},index) => {
              return(
                <SwiperSlide key={index} className='testimonial'>
                  <div className='client_avatar'>
                    <img src={avater} alt="avatar one"></img>
                  </div>
                  <h5 className='client_name'> {name}</h5>
                  <small className='client_review'>
                      {review}
                  </small>
                </SwiperSlide>
              )
            })
          }
         
      </Swiper>
    </section>
  )
}

export default testimonials