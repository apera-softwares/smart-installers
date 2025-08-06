"use client";
import React from "react";
import { Modal } from "../common/Modal";

interface ViewServiceDetailsModalProps {
  isOpen: boolean;
  closeModal: () => void;
  data: any;
}

const ViewServiceDetailsModal: React.FC<ViewServiceDetailsModalProps> = ({
  isOpen,
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={closeModal}
      className="max-w-3xl p-5 sm:p-6 bg-[#F9FAFB] "
    >
      <div className="w-full max-h-[420px] overflow-y-auto "></div>
    </Modal>
  );
};

export default ViewServiceDetailsModal;
