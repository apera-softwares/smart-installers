
import React from "react";

const OurApproach = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="w-full">
            <img
              src="/assets/images/about-us-img-4.png"
              alt=""
              className="w-full h-auto object-cover object-center rounded-3xl"
            />
          </div>
          <div className="w-full flex flex-col items-center lg:items-start lg:justify-center">
            <p className="font-medium text-center lg:text-start mb-1">
              Our Approach
            </p>
            <h2 className="text-3xl lg:text-4xl text-center lg:text-start font-semibold mb-6">
              Client-Centered Approach
            </h2>
            <p className=" mb-6">Unlike traditional contractors, we:</p>
            <ul className=" list-disc list-inside space-y-1.5 ">
              <li>Offer in-depth tech support post-installation</li>
              <li className="">Provide app training and onboarding</li>
              <li className="">Stay up-to-date with the latest smart trends</li>

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApproach;
