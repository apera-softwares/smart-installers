"use client";
import React, { useState, useEffect } from "react";
//import { ourServices } from "@/data/ourServices";
import { useQuery } from "@apollo/client";
import { GET_SERVICES } from "@/graphql/queries";
import ServiceCard from "./ServiceCard";
import ServiceCardLoader from "./ServiceCardLoader";
import ViewServiceDetailsModal from "./ViewServiceDetailsModal";

const WhatWeOffer = () => {
  const INITIAL_VISIBLE_SERVICE_COUNT = 3;
  const [viewAll, setViewAll] = useState<boolean>(false);
  const [services, setServices] = useState<any[]>([]);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [showViewDetailsModal, setShowViewDetailsModal] =
    useState<boolean>(false);
  const { loading, data } = useQuery(GET_SERVICES);

  useEffect(() => {
    if (data) {
      setServices(data?.services);
    }
  }, [data]);

  const visibleServices = viewAll
    ? services
    : services.slice(0, INITIAL_VISIBLE_SERVICE_COUNT);

  const handleToggleViewAll = () => {
    setViewAll(!viewAll);
  };

  const handleShowViewDetailsModal = (service: any) => {
    setSelectedService(service);
    setShowViewDetailsModal(true);
  };

  const handleCloseViewDetailsModal = () => {
    setShowViewDetailsModal(false);
    setSelectedService(null);
  };

  return (
    <section className="w-full ">
      <div className="w-full lg:max-w-5/6 mx-auto px-4 sm:px-6 lg:px-0 py-12 sm:py-16 lg:py-20">
        <div className="w-full flex items-center justify-between gap-6 mb-6 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary">
            What We Offer
          </h2>
          <button
            className="bg-primary-muted hover:bg-primary text-base lg:text-lg font-semibold px-6 py-3 text-center rounded-md cursor-pointer transition-all duration-300 "
            onClick={handleToggleViewAll}
          >
            {viewAll ? "View Less" : "View All"}
          </button>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <>
              <ServiceCardLoader /> <ServiceCardLoader /> <ServiceCardLoader />
            </>
          ) : visibleServices && visibleServices.length > 0 ? (
            visibleServices.map((service) => (
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
    </section>
  );
};

export default WhatWeOffer;
