import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const ReviewSlider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const { width } = useWindowDimensions();
  return (
    <Swiper
      className="detailed"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={width > 620 ? 60 : 0}
      loop={true}
      slidesPerView={width > 650 ? 3 : 2}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      scrollbar={{
        draggable: true,
      }}
    >
      {[...Array(7)].map((_, i) => (
        <SwiperSlide key={i}>
          <div className="individual">
            <div className="review">
              <div className="stars-wrapper">
                {[...Array(5)].map((_, i) => (
                  <span className="stars" key={i}>
                    <img
                      src="https://resume.io/assets/media/star-green20e9737f3d819bbc6c7b.svg"
                      alt=""
                      className="stars"
                    />
                  </span>
                ))}
              </div>
              <h3 className="short-desc">
                The templates are immaculate and really easy to use
              </h3>
              <p className="long-desc">
                A very easy to use and intuitive platform to create a high
                quality CV. The additional CV review makes a great impact in
                composing a successful CV that puts you on top of other
                applicants.
              </p>
              <p className="bottom-info sm-text">
                Mike Alexandru • about 1 hour ago
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="scroll">
        <div className="button-wrapper">
          <button ref={navigationPrevRef} className="back">
            <i className="fa fa-chevron-left" aria-hidden="true"></i>
          </button>
          <button ref={navigationNextRef} className="forward">
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </Swiper>
  );
};

export default ReviewSlider;
