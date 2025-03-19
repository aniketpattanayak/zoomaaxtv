import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useState } from "react";

const SwiperMovies = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const videos = [
    { id: 1, src: "https://player.vimeo.com/video/1046257501?h=3a3f4604ec&autoplay=1&muted=1" },
    { id: 2, src: "https://www.youtube.com/embed/hgxrbPaXSRo?autoplay=1&mute=1" },
    { id: 3, src: "https://www.youtube.com/embed/uaD9CblxV4s?autoplay=1&mute=1" },
  ];

  return (
    <div className="w-full flex justify-center items-center bg-black overflow-hidden">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: true }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-[80%] h-[350px]" // Set fixed height to prevent extra space
      >
        {videos.map((video, index) => (
          <SwiperSlide key={video.id} className="flex justify-center items-center">
            <iframe
              src={video.src}
              className={`rounded-lg transition-all duration-500 ${
                activeIndex === index ? "w-[400px] h-[250px]" : "w-[300px] h-[200px] opacity-60"
              }`}
              allow="autoplay"
              allowFullScreen
              title={`Video ${index + 1}`}
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperMovies;
