"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { HiMiniArrowSmallLeft, HiMiniArrowSmallRight } from "react-icons/hi2";

const TestimonialSlider = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial?.id} className="px-4">
            <TestimonialCard key={testimonial?.id} data={testimonial} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute left-1/2 -bottom-20 transform -translate-x-12 z-10 w-10 h-10 flex items-center justify-center  bg-[#00101A] text-white cursor-pointer rounded-full "
    onClick={onClick}
  >
    <HiMiniArrowSmallLeft className=" shrink-0 text-xl " />
  </button>
);

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute -bottom-20 right-1/2 transform translate-x-12 z-10 w-10 h-10 flex items-center justify-center bg-[#00101A] text-white cursor-pointer rounded-full  "
    onClick={onClick}
  >
    <HiMiniArrowSmallRight className=" shrink-0 text-xl" />
  </button>
);
