"use client";
import React from 'react';
import { HealthInsuranceColored } from '@/icons';

const WhatDifferent = () => {
  return (
    <div className="w-full bg-[#F9FAFB]">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="w-full flex flex-col items-center gap-1.5 mb-10 lg:mb-12">
          <p className="font-medium text-center">What Different?</p>
          <h2 className="text-3xl lg:text-4xl text-center lg:text-start font-semibold">
            What Makes Us Different?
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7">
          {/* card 1 */}
          <div className="w-full flex flex-col items-center p-5 lg:p-6 border border-[#D0D5DD] rounded-2xl">
            <div className="w-14 h-14 flex justify-center items-center p-2 border border-primary-muted rounded-full mb-5">
              <HealthInsuranceColored />
            </div>
            <h3 className="text-xl sm:text-2xl text-center font-medium mb-3">
              Licensed & Insured
            </h3>
            <p className="font-medium text-center text-[#6D6D6D] ">
              Peace of mind on every project.
            </p>
          </div>
          {/* card 2 */}
          <div className="w-full flex flex-col items-center p-5 lg:p-6 border border-[#D0D5DD] rounded-2xl">
            <div className="w-14 h-14 flex justify-center items-center p-2 border border-primary-muted rounded-full mb-5">
              <HealthInsuranceColored />
            </div>
            <h3 className="text-xl sm:text-2xl text-center font-medium mb-3">
              Custom, Scalable Solutions
            </h3>
            <p className="font-medium text-center text-[#6D6D6D] ">
              From single units to full-scale commercial buildings.
            </p>
          </div>
          {/* card 3 */}
          <div className="w-full flex flex-col items-center p-5 lg:p-6 border border-[#D0D5DD] rounded-2xl">
            <div className="w-14 h-14 flex justify-center items-center p-2 border border-primary-muted rounded-full mb-5">
              <HealthInsuranceColored />
            </div>
            <h3 className="text-xl sm:text-2xl text-center font-medium mb-3">
              Trusted by Industry Leaders
            </h3>
            <p className="font-medium text-center text-[#6D6D6D] ">
              We’ve worked with top names like Amazon, Primark, and H&M.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatDifferent
