"use client";
import React from "react";

interface ContactUsBannerProps {
  imageUrl: string;
  heading: string;
}

const ContactUsBanner: React.FC<ContactUsBannerProps> = ({
  imageUrl,
  heading,
}) => {
  return (
    <div className="relative w-full">
      {/* Background image container */}
      <div
        className="w-full flex flex-col items-center justify-center px-12 sm:px-16 lg:px-20 py-12 sm:py-20 lg:py-28 bg-cover bg-center bg-no-repeat relative z-10"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center text-white font-semibold">
            {heading}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUsBanner;
