"use client";
import React from "react";
import { IMAGE_NOT_FOUND_URL } from "@/constants/constants";

interface ServiceCardProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: any;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="px-6 py-8 border border-[#E3E8EF] rounded-2xl">
      <div className="flex items-center justify-center mb-6">
        <span className="w-20 h-20 flex justify-center items-center bg-[#F9F9F9] p-3 border border-gray-300 rounded-lg">
          {/* {service.icon} */}
          <img
            src={service?.icon?.url || IMAGE_NOT_FOUND_URL}
            alt=""
            className="w-14 h-14 object-center object-cover rounded-md "
          />
        </span>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-center mb-2">{service.title}</h3>
        <p className="text-center text-text-muted mb-6">
          {service.description}
        </p>
        <button className="font-semibold underline cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
