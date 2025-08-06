"use client";
import React from "react";
import { Modal } from "../common/Modal";
import { IMAGE_NOT_FOUND_URL } from "@/constants/constants";

interface ViewProjectDetailsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  data: any;
}

const ViewProjectDetailsModal: React.FC<ViewProjectDetailsModalProps> = ({
  isOpen,
  closeModal,
  data,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-xl p-5 sm:p-6 bg-[#F9FAFB] "
    >
      <div className="px-6 py-8 border border-[#E3E8EF] rounded-xl">
        <div className="flex items-center justify-center mb-6">
          <span className="w-20 h-20 flex justify-center items-center bg-[#F9F9F9] p-3 border border-gray-300 rounded-lg">
            {/* {data.icon} */}
            <img
              src={data?.icon?.url || IMAGE_NOT_FOUND_URL}
              alt=""
              className="w-14 h-14 object-center object-cover rounded-md "
            />
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold text-center mb-2">
            {data?.title || ""}
          </h3>
          <p className="text-center text-text-muted mb-6">
            {data?.description || ""}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ViewProjectDetailsModal;
