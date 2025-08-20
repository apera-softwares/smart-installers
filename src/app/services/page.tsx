"use client";
import React from "react";
import PageBanner from "@/components/common/PageBanner";
import WhatWeOfferAll from "@/components/services/WhatWeOfferAll";
import OurClient from "@/components/our-client/OurClient";
import FAQ from "@/components/faq/FAQ";

const Page = () => {
  const pageBannerProps = {
    imageUrl: "/assets/images/services-page-banner.png",
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
      <WhatWeOfferAll />
      {/* <OurClient />
      <FAQ /> */}
    </div>
  );
};

export default Page;
