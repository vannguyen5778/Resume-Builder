import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import createdIMG from "../../assets/images/create.png";
import downloadIMG from "../../assets/images/downloadIMG.png";
const instructions = [
  {
    id: "1",
    tabName: "Sign Up",
    boxTitle: "Your First Steps",
    boxContent:
      "We’ve made sure that signing up to our resume maker tools is even more convenient than usual. Use one of the most common networks used by professionals (LinkedIn, Facebook or your Google account) or simply skip this step and enter your name and email address. We keep your data strictly confidential.",
    url: "https://resume.io/assets/landing/home/how/sign_up-a585240eda115cb3f8330e8a6c4150b0e758a8eab31f2c4b5f80fe19bbcc4438.svg",
  },
  {
    id: "2",
    tabName: "Create",
    boxTitle: "Achieve beauty with ease",
    boxContent:
      "The resume builder provides a user-friendly interface and step-by-step guidance to help you create a polished, tailored resume. By following these instructions, you'll be able to build a comprehensive and impressive resume that showcases your professional background and skills effectively.",
    url: createdIMG,
  },
  {
    id: "3",
    tabName: "Download",
    boxTitle: "Now it's yours",
    boxContent:
      "Choose the desired file format for your resume. The most common options are PDF and Word documents. Consider the requirements of the job application or the platform where you intend to submit your resume.",
    url: downloadIMG,
  },
];
const AutoplaySlider = () => {
  return (
    <Swiper
      loop={true}
      slidesPerView={1}
      //  spaceBetween={30}
      //  centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => console.log(swiper)}
      navigation={true}
      pagination={{
        el: ".swiper-pagination",
        // clickable: 'false',
        // type: 'bullets',
        // renderBullet: function (index, className) {
        //     return '<span className="' + className + '">' + '<em>'+'</em>' + '<i></i>' + '<b></b>'  + '</span>';
        //   },
      }}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <div className="graphics">
        {/* <div className="box-wrapper swiper-pagination"> */}
        {/* <div className="">Hello</div> */}
        {/* <div className={`${index===0 ? 'active' : ''} step-box`}>
                      <h4>
                        1. Sign Up
                      </h4>
                      <span className="time-bar">
                          {index === 0 && <span className="progress"></span>}
                      </span>
                    </div>
                    <div className={`${index===1 ? 'active' : ''} step-box`}>
                      <h4>
                        2. Create
                      </h4>
                      <span className="time-bar">
                      {index === 1 && <span className="progress"></span>}
      
                      </span>
                    </div>
                    <div className={`${index===2 ? 'active' : ''} step-box`}>
                      <h4>
                       3. Download
                      </h4>
                      <span className="time-bar">
                      {index === 2 && <span className="progress"></span>}
      
                      </span>
                    </div> */}
        {/* </div> */}

        {instructions.map((instruction, index) => (
          <SwiperSlide key={index}>
            <div className="content-box">
              <div className="text-wrapper">
                <h4>{instruction.boxTitle}</h4>
                <p className="description">{instruction.boxContent}</p>
              </div>
              <div className="image">
                <img src={instruction.url} alt="" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </div>
      <div className="swiper-pagination swiper-pagination-bullets swiper-pagination-horizontal">
          {/* <div className={`${index===0 ? 'active' : ''} step-box`}>
                      <h4>
                        1. Sign Up
                      </h4>
                      <span className="time-bar">
                          {index === 0 && <span className="progress"></span>}
                      </span>
                    </div> */}

        <span className="swiper-pagination-bullet swiper-pagination-bullet-active">
            Hello
        </span>
        <span className="swiper-pagination-bullet">Hello</span>
        <span className="swiper-pagination-bullet"></span>
      </div>
    </Swiper>
  );
};

export default AutoplaySlider;
