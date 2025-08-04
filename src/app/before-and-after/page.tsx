"use client";
import React from "react";
import PageBanner from "@/components/common/PageBanner";
import BeforeAndAfterCard from "@/components/before-and-after/BeforeAndAfterCard";

const Page = () => {
  const pageBannerProps = {
    imageUrl: "/assets/images/projects-page-banner.png",
    heading: "Bringing Properties Into the Future",
    buttonText: "Why Smart Installer",
  };
  return (
    <div className="w-full">
      <PageBanner
        imageUrl={pageBannerProps.imageUrl}
        heading={pageBannerProps.heading}
        buttonText={pageBannerProps.buttonText}
      />
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-12 scroll-py-6">
        <BeforeAndAfterCard />
        <BeforeAndAfterCard />
      </div>
    </div>
  );
};

export default Page;
