"use client";
import React, { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import BeforeAndAfterCard from "@/components/before-and-after/BeforeAndAfterCard";
import ViewBeforeAndAfterDetailsModal from "@/components/before-and-after/ViewBeforeAndAfterDetailsModal";
import { beforeAndAfter } from "@/data/beforeAndAfter";

const Page = () => {
  const pageBannerProps = {
    imageUrl: "/assets/images/projects-page-banner.png",
    heading: "Bringing Properties Into the Future",
    buttonText: "Why Smart Installer",
  };
  const [showViewDetailsModal, setShowViewDetailsModal] =
    useState<boolean>(false);
  const [selectedData, setSelectedData] = useState<any>(null);
  const handleOpenViewDetailsModal = (data: any) => {
    setSelectedData(data);
    setShowViewDetailsModal(true);
  };
  const handleCloseViewDetailsModal = () => {
    setShowViewDetailsModal(false);
    setSelectedData(null);
  };
  return (
    <div className="w-full">
      <PageBanner
        imageUrl={pageBannerProps.imageUrl}
        heading={pageBannerProps.heading}
        buttonText={pageBannerProps.buttonText}
      />
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-12  space-y-6">
        {beforeAndAfter.map((item) => (
          <BeforeAndAfterCard
            key={item.id}
            data={item}
            onClickViewDetails={() => handleOpenViewDetailsModal(item)}
          />
        ))}
      </div>
      {showViewDetailsModal && (
        <ViewBeforeAndAfterDetailsModal
          isOpen={showViewDetailsModal}
          closeModal={handleCloseViewDetailsModal}
          data={selectedData}
        />
      )}
    </div>
  );
};

export default Page;
