import React from "react";

const OurStory = () => {
  return (
    <div className="w-full  bg-[#F9FAFB] ">
      <div className="w-full lg:max-w-5/6 mx-auto  px-4 sm:px-6 lg:px-0 py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-14">
          <div className="w-full flex items-start justify-center lg:justify-start gap-3 h-full ">
            <img
              src="/assets/images/about-us-img-1.png"
              alt=""
              className="w-36 sm:w-48 lg:w-56 h-auto object-contain rounded-3xl "
            />
            <img
              src="/assets/images/about-us-img-2.png"
              alt=""
              className=" w-36 sm:w-48 lg:w-56 h-auto object-contain translate-y-14 rounded-3xl "
            />
          </div>
          <div className="w-full flex flex-col items-center lg:items-start">
            <p className="font-medium text-center lg:text-start mb-1">
              Our Story
            </p>
            <h2 className=" text-3xl lg:text-4xl text-center lg:text-start font-semibold mb-6">
              From Wiring Walls to Building Smart Worlds
            </h2>
            <p className="text-center lg:text-start mb-8">
              Founded in [Year], Smart Installer began with a vision: to make
              smart technology simple, accessible, and effective for everyday
              users. What started as a small team of tech-savvy professionals in
              NYC has grown into a trusted brand serving homeowners, developers,
              and businesses alike.
            </p>
            <p className="text-center lg:text-start mb-10 lg:mb-12">
              We saw a gap in the market—most contractors knew wiring, but not
              technology. So, we stepped in as the experts who do both.
            </p>
            <button className=" flex items-center justify-center bg-primary-muted font-medium px-6 py-3 rounded-lg cursor-pointer ">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
