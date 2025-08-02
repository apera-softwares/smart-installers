"use client";
import React from "react";

interface PageBannerProps {
  imageUrl: string;
  heading: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const PageBanner: React.FC<PageBannerProps> = ({
  imageUrl,
  heading,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="relative w-full">
      {/* Background image container */}
      <div
        className="w-full flex flex-col items-center justify-center px-12 sm:px-16 lg:px-20 py-12 sm:py-16 lg:py-24 bg-cover bg-center bg-no-repeat relative z-10"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <button className="text-sm sm:font-semibold font-medium uppercase tracking-wide text-white px-4 py-2 rounded-full border border-white mb-2.5 ">
            {buttonText}
          </button>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center text-white font-semibold">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
