import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/effect-coverflow';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';

import { EffectCoverflow, Navigation } from 'swiper/modules';

const templates = [
    {
      id: 0,
      location: "Paris",
      users: 27000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/764/persistent-resource/paris-cover-letter-templates.jpg",
    },
    {
      id: 1,
      location: "Berlin",
      users: 32000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/765/persistent-resource/berlin-cover-letter-templates.jpg",
    },
    {
      id: 2,
      location: "Geneva",
      users: 3200,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/2839/persistent-resource/geneva-cover-letter-templates.jpg",
    },
    {
      id: 3,
      location: "Vancouver",
      users: 34000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/732/persistent-resource/vancouver-cover-letter-templates.jpg",
    },
    {
      id: 4,
      location: "Tokyo",
      users: 34000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/744/persistent-resource/tokyo-cover-letter-templates.jpg",
    },
    {
      id: 5,
      location: "Milan",
      users: 41000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/771/persistent-resource/milan-cover-letter-templates.jpg",
    },
    {
      id: 6,
      location: "Lisbon",
      users: 20000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/2808/persistent-resource/lisbon-cover-letter-templates.jpg",
    },
    {
      id: 7,
      location: "Barcelona",
      users: 23000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/780/persistent-resource/barcelona-cover-letter-templates.jpg",
    },
    {
      id: 8,
      location: "Copenhagen",
      users: 18000,
      url: "https://s3.resume.io/cdn-cgi/image/width=816,format=auto/uploads/local_template_image/image/2307/persistent-resource/copenhagen-cover-letter-templates.jpg",
    },
   
  ];


const Carousel = () => {
  return (
    <div className="carousel-wrap">
    <div className="container">
      <h1 className="heading"></h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        modules={[Navigation,  EffectCoverflow]}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        className="swiper_container"
      >
       {templates.map((template, index) => (
        <>
            
        <SwiperSlide key={index}>
        <h3 className="location">{template.location}</h3>
              <p className="users sm-text">
                {template.users}+ users chose this template
              </p>
            <img src={template.url} alt="" />
        </SwiperSlide>
</>
       ))}

        <div className="slider-controller">
          <div className="swiper-button-prev slider-arrow">
          <i className="fa fa-chevron-left" aria-hidden="true"></i>

          </div>
          <div className="swiper-button-next slider-arrow">
          <i className="fa fa-chevron-right" aria-hidden="true"></i>

          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </div>
  )
}

export default Carousel