"use client";
import React from "react";
import FAQItem from "./FAQItem";
import { faqs } from "@/data/faqs";
const FAQContent = () => {
  return (
    <div className="w-full grid grid-cols-6 gap-10">
      <div className="col-span-6 lg:col-span-4 space-y-2">
        {faqs.map((faq) => (
          <FAQItem key={faq.id} title={faq.title} content={faq.content} />
        ))}
      </div>
      <div className="col-span-6 lg:col-span-2">
        <div className=" max-w-md mx-auto  flex flex-col items-center bg-primary p-5 rounded-4xl">
          <div className="shrink-0 mb-5">
            <img
              src="/assets/images/faq-card-cctv.png"
              alt=""
              className="w-full object-center object-cover rounded-2xl"
            />
          </div>
          <div className="shrink-0 flex flex-col items-center">
            <h2 className="font-bold text-lg text-center text-white mb-4">
              Install A Smart Device And Get 25% Off This Month
            </h2>
            <button className="w-full flex items-center justify-center px-6 py-3 bg-white rounded-full cursor-pointer">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
