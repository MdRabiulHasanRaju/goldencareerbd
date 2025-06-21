import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.css"; // Custom CSS for overlay

function Slider() {
  return (
    <div className="container-fluid px-0 pb-5">
      <Swiper
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        spaceBetween={30}
        loop={true}
        navigation={true} 
        autoplay={{ delay: 3000 }}
        modules={[Autoplay,Navigation ]}
      >
        <SwiperSlide>
          <div className="position-relative">
            <img src="/img/carousel-1.jpg" alt="slide" className="img-fluid w-100" style={{ height: "500px", objectFit: "cover" }} />
            <div className="overlay bg-dark slider-opacity position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="container position-absolute top-50 start-50 translate-middle text-white px-3">
              <h2 className="display-5 fw-bold text-white">Your Trusted Manning Partner Since 2010</h2>
              <p className="lead">Certified, Experienced & Globally Recognized Crew Provider</p>
              <a href="/services" className="btn btn-primary btn-lg">View Services</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative">
            <img src="/img/carousel-2.jpg" alt="slide" className="img-fluid w-100" style={{ height: "500px", objectFit: "cover" }} />
            <div className="overlay bg-dark slider-opacity position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="container position-absolute top-50 start-50 translate-middle text-white  px-3">
              <h2 className="display-5 fw-bold text-white">Professional Maritime Training </h2>
              <p className="lead">Powered by Ocean Maritime Academy, Chattogram</p>
              <a href="/services" className="btn btn-primary btn-lg">View Services</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative">
            <img src="/img/carousel-1.jpg" alt="slide" className="img-fluid w-100" style={{ height: "500px", objectFit: "cover" }} />
            <div className="overlay bg-dark slider-opacity position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="container position-absolute top-50 start-50 translate-middle text-white px-3">
              <h2 className="display-5 fw-bold text-white">Join Reputed Foreign Vessels</h2>
              <p className="lead">Open Positions for Deck, Engine & Catering Crew</p>
              <a href="/services" className="btn btn-primary btn-lg">View Services</a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="position-relative">
            <img src="/img/carousel-2.jpg" alt="slide" className="img-fluid w-100" style={{ height: "500px", objectFit: "cover" }} />
            <div className="overlay bg-dark slider-opacity position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="container position-absolute top-50 start-50 translate-middle text-white  px-3">
              <h2 className="display-5 fw-bold text-white"> We Care Beyond Contracts</h2>
              <p className="lead">From Visa to Family Welfare – Full Support Guaranteed</p>
              <a href="/services" className="btn btn-primary btn-lg">View Services</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="position-relative">
            <img src="/img/carousel-1.jpg" alt="slide" className="img-fluid w-100" style={{ height: "500px", objectFit: "cover" }} />
            <div className="overlay bg-dark slider-opacity position-absolute top-0 start-0 w-100 h-100"></div>
            <div className="container position-absolute top-50 start-50 translate-middle text-white px-3">
              <h2 className="display-5 fw-bold text-white">Trusted by Mariners Worldwide  </h2>
              <p className="lead">Over 5,000 Sailors Placed Globally with Satisfaction</p>
              <a href="/services" className="btn btn-primary btn-lg">View Services</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
