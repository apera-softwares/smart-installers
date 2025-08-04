"use client";
import React from "react";
import { Modal } from "../common/Modal";

interface Data {
  id: string;
  title: string;
  totalCost: string;
  address: string;
  description: string;
  installations: {
    lable: string;
    value: string;
  }[];
  media: {
    beforeImgUrl: string;
    afterImgUrl: string;
  };
}

interface ViewBeforeAndAfterDetailsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  data: Data;
}

const ViewBeforeAndAfterDetailsModal: React.FC<
  ViewBeforeAndAfterDetailsModalProps
> = ({ isOpen, closeModal, data }) => {


  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-3xl p-5 sm:p-6 bg-[#F9FAFB] "
    >
      <div className="w-full max-h-[420px] overflow-y-auto ">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 ">
          <div className="relative w-full h-full rounded-lg">
            <span className=" w-24 absolute top-6 left-6  bg-white text-sm sm:text-base font-medium text-center px-4 lg:px-5 py-2  rounded-full">
              Before
            </span>
            <img
              src={`${data.media.beforeImgUrl}`}
              alt=""
              className="w-full h-64 object-center object-cover rounded-lg"
            />
          </div>
          <div className="relative w-full h-full rounded-lg">
            <span className=" w-24 absolute top-6 left-6  bg-white text-sm sm:text-base  font-medium text-center px-4 lg:px-5 py-2 rounded-full">
              After
            </span>
            <img
              src={`${data.media.afterImgUrl}`}
              alt=""
              className="w-full h-64 object-center object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full space-y-6">
          <div className="w-full flex justify-between items-start gap-3 pb-6 border-b border-[#D0D5DD]">
            <div className="">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
                {data.title}
              </h2>
              <p className=" text-[#767A82] text-base lg:text-lg">
                {data.address}
              </p>
            </div>
            <div className="">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#6BB7A1]">
                {data.totalCost || "NA"}
              </h2>
            </div>
          </div>
          <div className="w-full pb-6 border-b border-[#D0D5DD]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
              Installation
            </h2>
            <div className="w-full flex items-center flex-wrap gap-8 sm:gap-10">
              {data && data.installations.length > 0 ? (
                data.installations.map((item, index: number) => (
                  <div key={index} className="">
                    <p className=" mb-2 text-[#556171]">{item.lable}</p>
                    <p className="text-lg lg:text-xl font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))
              ) : (
                <div className="">
                  <p className=" mb-2 text-[#556171]">No Installation</p>
                  <p className="text-lg lg:text-xl font-semibold"></p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full pb-6 border-b border-[#D0D5DD]">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
              Description
            </h2>
            <p className="text-[#767A82]">
           {
            data.description||"NA"
           }
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
