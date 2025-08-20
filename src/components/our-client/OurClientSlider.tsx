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
    <div className="w-full grid grid-cols-3 lg:grid-cols-6 gap-1">
      {/* <Slider {...settings}> */}
        {ourClients.map(
          (client: { id: string; name: string; imgSrc: string }) => (
            <div key={client.id} className=" items-stretch px-1 ">
              <div className=" items-center justify-center">
                <img
                  src={client.imgSrc}
                  alt={`${client.name}`}
                  className="w-32 h-20 sm:w-52 sm:h-28 "
                />
              </div>
            </div>
          )
        )}
      {/* </Slider> */}
    </div>
  );
};

export default OurClienSlider;
