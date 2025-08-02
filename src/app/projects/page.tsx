"use client";
import React from "react";
import PageBanner from "@/components/PageBanner";
import OurProjects from "@/components/OurProjects";

const Page = () => {
  const pageBannerProps = {
    imageUrl: "/assets/images/projects-page-banner.png",
    heading: "Smart Projects That Speak for Themselves",
    buttonText: "Our Projects",
  };
  return (
    <div className="w-full">
      <PageBanner
        imageUrl={pageBannerProps.imageUrl}
        heading={pageBannerProps.heading}
        buttonText={pageBannerProps.buttonText}
      />
      <OurProjects />
    </div>
  );
};

export default Page;
