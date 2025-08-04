"use client";
import React, { useState } from "react";
import { Modal } from "../common/Modal";

interface ViewBeforeAndAfterDetailsModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ViewBeforeAndAfterDetailsModal: React.FC<
  ViewBeforeAndAfterDetailsModalProps
> = ({ isOpen, closeModal }) => {
  const clear = () => {};
  const handleCloseModal = () => {
    clear();
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleCloseModal}
      className="max-w-3xl p-5 sm:p-6 bg-[#F9FAFB] "
    >
      <div className="w-full max-h-[420px] overflow-y-auto ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 ">
          <div className="relative w-full h-full rounded-lg">
            <span className=" w-24 absolute top-6 left-6 sm:left-8 bg-white text-sm sm:text-base lg:text-lg font-medium text-center px-4 lg:px-5 py-2 lg:py-2.5 rounded-full">
              Before
            </span>
            <img
              src="/assets/before-and-after/before-1.png"
              alt=""
              className="w-full h-64 object-center object-cover rounded-lg"
            />
          </div>
          <div className="relative w-full h-full rounded-lg">
            <span className=" w-24 absolute top-6 left-6 sm:left-8 bg-white text-sm sm:text-base lg:text-lg font-medium text-center px-4 lg:px-5 py-2 lg:py-2.5 rounded-full">
              After
            </span>
            <img
              src="/assets/before-and-after/after-1.png"
              alt=""
              className="w-full h-64 object-center object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full space-y-6">
          <div className="w-full flex justify-between gap-3 pb-6 border-b border-[#D0D5DD]">
            <div className="">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                Full Smart Security Upgrade
              </h2>
              <p className=" text-[#767A82] text-base lg:text-lg">
                123 Main St, Brooklyn, NY
              </p>
            </div>
            <div className="">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6BB7A1]">
                $0 - 38k
              </h2>
            </div>
          </div>
          <div className="w-full pb-6 border-b border-[#D0D5DD]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Installation
            </h2>
            <div className="w-full flex items-center flex-wrap gap-8 sm:gap-10">
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
          </div>
          <div className="w-full pb-6 border-b border-[#D0D5DD]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
              Description
            </h2>
            <p className="text-[#767A82]">
              Founded in [Year], Smart Installer began with a vision: to make
              smart technology simple, accessible, and effective for everyday
              users. What started as a small team of tech-savvy professionals in
              NYC has grown into a trusted brand serving homeowners, developers,
              and businesses alike.We saw a gap in the market—most contractors
              knew wiring, but not technology. So, we stepped in as the experts
              who do both.
            </p>
          </div>
          <div className="w-full">
            <button className=" bg-primary-muted px-6 py-3 font-medium text-center rounded-lg cursor-pointer ">
              Request Similar Quote
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewBeforeAndAfterDetailsModal;
