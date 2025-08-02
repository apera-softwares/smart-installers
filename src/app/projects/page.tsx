"use client";
import React from "react";
import PageBanner from "@/components/common/PageBanner";
import OurProjects from "@/components/projects/OurProjects";

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
