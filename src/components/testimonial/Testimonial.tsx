"use client";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0  py-12 sm:py-16 lg:py-20">
        <div className="w-full">
          <div className="w-full mb-10 lg:mb-12">
            <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl text-center mb-3  ">
              Testimonials
            </h2>
            <p className="text-center text-text-muted ">What Our Clients Say</p>
          </div>
          <div className="w-full">
            <TestimonialSlider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
