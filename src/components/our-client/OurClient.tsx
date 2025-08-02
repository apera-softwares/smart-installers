"use client";
import React from "react";
import OurClienSlider from "./OurClientSlider";

const OurClient = () => {
  return (
    <section className="w-full">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 pt-20 pb-16">
        <div className=" mb-10 lg:mb-12">
          <p className=" font-medium text-text-primary text-center mb-2">
            Our Clients
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            Companies we work with
          </h2>
        </div>
        <div className="w-full">
          <OurClienSlider />
        </div>
      </div>
    </section>
  );
};

export default OurClient;
