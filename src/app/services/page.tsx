"use client";
import React from "react";
import PageBanner from "@/components/PageBanner";
import WhatWeOfferAll from "@/components/WhatWeOfferAll";
import OurClient from "@/components/OurClient";
import FAQ from "@/components/FAQ";

const Page = () => {
  const pageBannerProps = {
    imageUrl: "/assets/images/service-page-banner.png",
    heading: "Smart Services Built to Secure, Simplify, and Connect",
    buttonText: "Our Services",
  };
  return (
    <div className="w-full">
      <PageBanner
        imageUrl={pageBannerProps.imageUrl}
        heading={pageBannerProps.heading}
        buttonText={pageBannerProps.buttonText}
      />
      <WhatWeOfferAll/>
      <OurClient/>
      <FAQ/>
    </div>
  );
};

export default Page;
