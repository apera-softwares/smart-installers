"use client";
import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { ourServices } from "@/data/ourServices";
const WhatWeOfferAll = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-20">
        <div className="w-full flex flex-col items-center justify-cente mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            What We Offer
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ourServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeOfferAll


