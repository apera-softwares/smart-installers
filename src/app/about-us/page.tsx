"use client";
import React from "react";
import PageBanner from "@/components/common/PageBanner";
import OurStory from "@/components/about-us/OurStory";
import OurCoreValues from "@/components/about-us/OurCoreValues";
import WhatDifferent from "@/components/about-us/WhatDifferent";
import OurApproach from "@/components/about-us/OurApproach";
import OurCoreValues2 from "@/components/about-us/OurCoreValues2";
import Testimonial from "@/components/testimonial/Testimonial";
import OurClient from "@/components/our-client/OurClient";
import FAQ from "@/components/faq/FAQ";

const Page = () => {
  const pageBannerProps = {
    imageUrl: "/assets/images/about-us-banner.png",
    heading: "Building the Future with Smart Technology",
    buttonText: "About us",
  };
  return (
    <div className="w-full ">
      <PageBanner
        imageUrl={pageBannerProps.imageUrl}
        heading={pageBannerProps.heading}
        buttonText={pageBannerProps.buttonText}
      />

      <OurStory />
      <OurCoreValues />
      <WhatDifferent />
      <OurApproach />
      <OurCoreValues2/>
      <Testimonial />
      <OurClient />
      <FAQ />
    </div>
  );
};

export default Page;
