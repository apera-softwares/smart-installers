"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_SERVICES } from "@/graphql/queries";
import ServiceCard from "@/components/services/ServiceCard";
// import { ourServices } from "@/data/ourServices";
import ServiceCardLoader from "./ServiceCardLoader";
import ViewServiceDetailsModal from "./ViewServiceDetailsModal";

const WhatWeOfferAll = () => {
  const [services, setServices] = useState<any[]>([]);
   const [selectedService, setSelectedService] = useState<any>(null);
   const [showViewDetailsModal, setShowViewDetailsModal] =
     useState<boolean>(false);
  const { loading, data } = useQuery(GET_SERVICES);

  useEffect(() => {
    if (data) {
      setServices(data.services);
    }
  }, [data]);

  const handleShowViewDetailsModal = (service: any) => {
    setSelectedService(service);
    setShowViewDetailsModal(true);
  };

  const handleCloseViewDetailsModal = () => {
    setShowViewDetailsModal(false);
    setSelectedService(null);
  };


  return (
    <div className="w-full">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-20">
        <div className="w-full flex flex-col items-center justify-cente mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
            What We Offer
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <>
              <ServiceCardLoader /> <ServiceCardLoader /> <ServiceCardLoader />
            </>
          ) : services && services.length > 0 ? (
            services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onClickViewDetails={() => handleShowViewDetailsModal(service)}
              />
            ))
          ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-lg py-4 text-center font-bold">
              No Services Found
            </div>
          )}
        </div>
      </div>
      <ViewServiceDetailsModal
        isOpen={showViewDetailsModal}
        closeModal={handleCloseViewDetailsModal}
        data={selectedService}
      />
    </div>
  );
};

export default WhatWeOfferAll;
