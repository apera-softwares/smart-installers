"use cleint";
import React, { useState } from "react";
import ViewBeforeAndAfterDetailsModal from "./ViewBeforeAndAfterDetailsModal";

const BeforeAndAfterCard = () => {
  const [showViewDetailsModal, setShowViewDetailsModal] =
    useState<boolean>(false);
  const handleOpenViewDetailsModal = () => {
    setShowViewDetailsModal(true);
  };
  return (
    <div className="w-full bg-[#F9FAFB] rounded-2xl lg:rounded-[20px] p-5 sm:p-6  space-y-6 ">
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6  ">
        <div className="relative w-full h-full rounded-lg">
          <span className=" absolute top-6 left-8 bg-white text-base sm:text-lg font-medium px-5 py-2.5 rounded-full">
            Before
          </span>
          <img
            src="/assets/before-and-after/before-1.png"
            alt=""
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
        <div className="relative w-full h-full rounded-lg">
          <span className="absolute top-6 left-8 bg-white text-base sm:text-lg font-medium px-5 py-2.5 rounded-full">
            After
          </span>
          <img
            src="/assets/before-and-after/after-1.png"
            alt=""
            className="w-full h-full object-center object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 ">
        <div className="w-full flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Full Smart Security Upgrade
          </h2>
          <p className=" text-[#767A82] text-base lg:text-lg">
            123 Main St, Brooklyn, NY
          </p>
          <button
            onClick={handleOpenViewDetailsModal}
            className=" hidden lg:inline-block bg-primary-muted px-6 py-3 mt-5 font-medium text-center rounded-lg cursor-pointer "
          >
            View Detail
          </button>
        </div>
        <div className="w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Installation</h2>
          <div className="w-full flex items-center flex-wrap gap-8">
            <div className="">
              <p className=" mb-2 text-[#556171]">Cameras</p>
              <p className="text-lg lg:text-xl font-semibold">6x</p>
            </div>
            <div className="">
              <p className=" mb-2 text-[#556171]">Audio</p>
              <p className="text-lg lg:text-xl font-semibold">4 zone</p>
            </div>
            <div className="">
              <p className=" mb-2 text-[#556171]">Smart Lock</p>
              <p className="text-lg lg:text-xl font-semibold">2x</p>
            </div>
            <div className="">
              <p className=" mb-2 text-[#556171]">Intercom</p>
              <p className="text-lg lg:text-xl font-semibold">1x</p>
            </div>
          </div>
          <button
            onClick={handleOpenViewDetailsModal}
            className=" lg:hidden bg-primary-muted px-6 py-3 mt-6 font-medium text-center rounded-lg cursor-pointer "
          >
            View Detail
          </button>
        </div>
      </div>
      {showViewDetailsModal && (
        <ViewBeforeAndAfterDetailsModal
          isOpen={showViewDetailsModal}
          closeModal={() => setShowViewDetailsModal(false)}
        />
      )}
    </div>
  );
};

export default BeforeAndAfterCard;
