"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [
  "/images/slider-1.jpeg",
  "/images/slider-6.jpeg",
  "/images/slider-3.jpeg",
  "/images/slider-4.jpeg",
  "/images/slider-5.jpeg",
  "/images/slider-2.jpeg",
  "/images/slider-7.jpeg",
  "/images/slider-8.jpeg",
  "/images/slider-9.jpeg",
  "/images/slider-10.jpeg",
];

const BakerySlider: React.FC = () => {
  return (
    <section className="py-20 overflow-hidden">

      {/* Title */}
      <div className="text-center mb-10">
        <p className="text-[#C97B36] font-semibold uppercase tracking-[0.2em]">
          Santo Bocado
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-[#4B2E1F] mt-3">
          Horneado artesanal 🥐
        </h2>
      </div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1.2}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2.2,
          },
          1024: {
            slidesPerView: 2.8,
          },
        }}
        className="!overflow-visible"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                relative
                h-[400px]
                md:h-[500px]
                rounded-[30px]
                overflow-hidden
                shadow-2xl
              "
            >

              {/* Image */}
              <Image
                src={image}
                alt="Santo Bocado"
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">

                <h3 className="text-3xl font-bold drop-shadow-lg">
                  Santo Bocado 🥐
                </h3>

                <p className="mt-2 text-[#f3e5d0]">
                  Productos artesanales frescos cada día.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BakerySlider;