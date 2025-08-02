"use client";
import React from "react";
import FAQHeader from "./FAQHeader";
import FAQContent from "./FAQContent";

const FAQ = () => {
  return (
    <div className="w-full">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-20">
        <div className="w-full border border-[#D0D5DD] rounded-3xl py-10 px-5 sm:px-10  lg:px-14 lg:py-14 ">
          <FAQHeader />
          <FAQContent />
        </div>
      </div>
    </div>
  );
};

export default FAQ;
