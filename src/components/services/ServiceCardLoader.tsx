import React from "react";

const ServiceCardLoader = () => {
  return (
    <div className="px-6 py-8 border border-[#E3E8EF] rounded-2xl animate-pulse ">
      <div className="flex items-center justify-center mb-6">
        <span className="w-20 h-20 flex justify-center items-center bg-gray-100 p-3  rounded-lg"></span>
      </div>
      <div className="flex flex-col items-center gap-4">
        <div className="w-1/2 h-10 rounded-md bg-gray-100"></div>
        <div className="w-3/4 h-12 rounded-md bg-gray-100"></div>
        <div className="w-40 h-8 bg-gray-100"></div>
      </div>
    </div>
  );
};

export default ServiceCardLoader;
