"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ourClients } from "@/data/ourClient";

const OurClienSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <Slider {...settings}>
        {ourClients.map(
          (client: { id: string; name: string; imgSrc: string }) => (
            <div key={client.id} className=" flex flex-col items-stretch px-2 ">
              <div className=" shrink-0 flex flex-col items-center justify-center  rounded-xl ">
                <img
                  src={client.imgSrc}
                  alt={`${client.name}`}
                  className=" shrink-0 w-32 h-20 sm:w-52 sm:h-28  object-cover object-center border border-[#05588E29] rounded-xl "
                />
              </div>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default OurClienSlider;
