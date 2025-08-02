import React from "react";

const OurCoreValues2 = () => {
  return (
    <div className="w-ful bg-[#F9FAFB]">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div className="w-full flex flex-col items-center lg:items-start lg:justify-center ">
            <p className="font-medium text-center lg:text-start mb-1">
              Mission Statement
            </p>
            <h2 className="text-3xl lg:text-4xl text-center lg:text-start font-semibold mb-6">
              Our Core Values
            </h2>
            <ul className="mb-10 lg:mb-12 list-disc list-inside space-y-1.5 ">
              <li>
                Innovation First: We stay ahead of the curve with the latest in
                smart technology.
              </li>
              <li className="">
                Client-Centric: Every solution is tailored to your needs.
              </li>
              <li className="">Reliability: On time. On budget. On point.</li>
              <li className="">
                Transparency: No surprises—only honest work and clear
                communication.
              </li>
              <li className="">
                Sustainability: Smarter solutions for a more energy-efficient
                world.
              </li>
            </ul>
            <button className=" flex items-center justify-center bg-primary-muted font-medium px-6 py-3 rounded-lg cursor-pointer ">
              Learn more
            </button>
          </div>
          <div className="w-full flex flex-col lg:justify-center ">
            <img
              src="/assets/images/about-us-img-5.png"
              alt=""
              className="w-full h-auto object-cover object-center rounded-4xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCoreValues2;
