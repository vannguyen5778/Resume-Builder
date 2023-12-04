import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import createdIMG from "../../assets/images/create.png";
import downloadIMG from "../../assets/images/downloadIMG.png";
import { useEffect, useRef, useState } from "react";
// import { useInView } from "react-intersection-observer";

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
  const progressBarRef = useRef(null);
  const autoplayRef = useRef(null);
  const autoplayWrapperRef = useRef(null);
  const [isElementVisible, setElementVisible] = useState();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setElementVisible(entry.isIntersecting);
    }, {
      // threshold: .7,
    });
    observer.observe(autoplayWrapperRef.current);
  }, []);

  useEffect(() => {
      if (isElementVisible) {
        autoplayRef.current.autoplay.start();
        // progressBarRef.current.style.animationPlayState = 'running';
      } else {
        autoplayRef.current.autoplay.stop();
        // progressBarRef.current.style.animationPlayState = 'paused';
      }

  }, [isElementVisible]);

  return (
    <div ref={autoplayWrapperRef} className="autoplay-wrapper">
    <Swiper
      loop={true}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `
            <div class="step-box ${className}">
              <h4>${index + 1}. ${instructions[index].tabName}</h4>
              <span class="time-bar">
              <span ref={progressBarRef} class="progress"></span>
              </span>
            </div>
          `;
        },
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      onSwiper={(swiperInstance) => {
        if (!swiperInstance) return;
        autoplayRef.current = swiperInstance;
      }}
    >
      <div className="graphics">
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
      <div className="swiper-pagination"></div>
      <div className="time">
        <div ref={progressBarRef} className={`${isElementVisible ? '' : 'paused'} progress`}></div>
      </div>
    </Swiper>
    </div>
  );
};

export default AutoplaySlider;
