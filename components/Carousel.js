import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Navigation } from "swiper";

const Carousel = ({result, index}) => {
  return (
      <div className='flex justify-center'>
      <div className={`prev${index} flex items-center`} >
      <img src={require('../public/arrowright.png').default.src} alt="" className='rotate-180 cursor-pointer'/>
      </div>
    <Swiper navigation={{
       nextEl:`.next${index}`,
      prevEl:`.prev${index}`,
     
    }} slidesPerView={1} spaceBetween={20} breakpoints={{
          500:{
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }} modules={[Navigation]} className="w-[90%] rounded-[15px] bg-[#131313] mySwiper">
      {
        result.map((item)=>(
          <SwiperSlide className='flex flex-col min-h-full self-stretch text-white bg-[#232323] py-4 px-4 rounded-md'>
          <div  className='flex '>
          <div className='w-20 h-20 self-center'>
          <img src={item.image} alt="" className='w-full h-full object-cover'/>
          </div>
          <div className='ml-4'>
             <h3 className=''>{item.product_name}</h3> 
             <span className='opacity-60'>{item.brand_name}</span>
             <p>${item.price}</p>
          </div>
          </div>
          <div>
              <div className='opacity-60 flex justify-between'>
                  <p>{item.address.state}, {item.address.city}</p>
                  <p></p>
              </div>
              <p className='opacity-60'>{item.discription}</p>
          </div>
          </SwiperSlide>
        ))
      }
  </Swiper>
  <div className={`next${index}  flex items-center`} >
  <img src={require('../public/arrowright.png').default.src} alt="" className='cursor-pointer' />
      </div>
  </div>
  )
}

export default Carousel