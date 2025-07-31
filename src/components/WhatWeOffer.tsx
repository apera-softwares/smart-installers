import React from "react";
import OfferItem from "./OfferItem";
const WhatWeOffer = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-0">
      <div className="w-full lg:max-w-5/6 mx-auto py-12 sm:py-16 lg:py-20">
        <div className="w-full flex items-center justify-between gap-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary">
            What We Offer
          </h2>
          <button className="bg-primary-muted hover:bg-primary text-base lg:text-lg font-semibold px-6 py-3 text-center rounded-md cursor-pointer transition-all duration-300 ">
            View All
          </button>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <OfferItem />
          <OfferItem />
          <OfferItem />
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
