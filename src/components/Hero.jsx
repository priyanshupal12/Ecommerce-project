import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const slides = [
    {
      video: "/saree.mp4",
      title: "Elevate Your Style",
      text: "Festive collection for every occasion.",
    },
    {
      video: "/video2.mp4",
      title: "Trendy & Affordable",
      text: "Find the best styles at unbeatable prices.",
    },
    {
      video: "/video3.mp4",
      title: "New Arrivals",
      text: "Stay ahead with the latest trends.",
    },
  ];

  return (
    <section className="h-[75vh] w-full relative">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: true }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full flex items-center justify-start text-left">
              {/* Video Background */}
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={slide.video} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Left-aligned Content */}
              <div className="relative z-10 max-w-3xl pl-6 md:pl-10 pr-6 text-white">
                <h1 className="text-4xl md:text-6xl font-playfair font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mt-3 md:mt-5 font-poppins">
                  {slide.text}
                </p>
                <div className="mt-6 flex flex-col md:flex-row gap-4">
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFD700",
                      color: "#1C1C1C",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      padding: "10px 20px",
                      "&:hover": { backgroundColor: "#e6c300" },
                    }}
                  >
                    Shop Now
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      color: "#FFD700",
                      borderColor: "#FFD700",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      padding: "10px 20px",
                      "&:hover": { borderColor: "#e6c300", color: "#e6c300" },
                    }}
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
