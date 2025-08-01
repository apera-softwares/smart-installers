"use client";
import React from "react";
import {
  WhyChooseUsPoint1Icon,
  WhyChooseUsPoint2Icon,
  WhyChooseUsPoint3Icon,
  WhyChooseUsPoint4Icon,
  WhyChooseUsPoint5Icon,
  WhyChooseUsPoint6Icon,
} from "@/icons";

const WhyChooseUs = () => {
  return (
    <section className="w-full pt-8 pb-16">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-14 ">
          <div className="flex flex-col justify-center">
            <img
              src="/assets/images/why-choose-us-image.png"
              alt="Why Choose Us Image"
              className=" object-center object-cover"
            />
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className=" font-medium text-center md:text-start text-text-muted mb-2">
              Why Choose Us!
            </p>
            <h2 className="font-bold text-center md:text-start text-3xl lg:text-4xl mb-6">
              Why Smart Installer
            </h2>
            <ul className=" space-y-4 mb-6">
              <li>
                <div className="flex items-start gap-3">
                  <WhyChooseUsPoint1Icon className="mt-1" />

                  <span className="text-base lg:text-lg text-text-muted">
                    NYC-Based & Fully Insured
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <WhyChooseUsPoint2Icon className="mt-1" />
                  <span className="text-base lg:text-lg text-text-muted">
                    Trusted by Developers & Builders
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <WhyChooseUsPoint3Icon className="mt-1" />
                  <span className="text-base lg:text-lg text-text-muted">
                    Remote Access Experts
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <WhyChooseUsPoint4Icon className="mt-1" />
                  <span className="text-base lg:text-lg text-text-muted">
                    High-End Finishes, Fast Turnaround
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <WhyChooseUsPoint5Icon className="mt-1" />
                  <span className="text-base lg:text-lg text-text-muted">
                    Commercial & Residential Projects
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <WhyChooseUsPoint6Icon className="mt-1" />
                  <span className="text-base lg:text-lg text-text-muted">
                    Modern Tech. Proven Results
                  </span>
                </div>
              </li>
            </ul>
            <p className="text-base lg:text-lg text-center md:text-start font-medium">
              {`  “We’re not just contractors — we’re your smart tech partners.”`}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
