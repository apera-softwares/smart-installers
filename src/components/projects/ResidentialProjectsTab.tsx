"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/graphql/queries";
import ProjectCard from "./ProjectCard";
//import { ourProjects } from "@/data/ourProjects";
import ProjectCardLoader from "./ProjectCardLoader";
import ViewProjectDetailsModal from "./ViewProjectDetailsModal";
import NotFound from "../common/NotFound";

const ResidentialProjectsTab = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [showViewDetailsModal, setShowViewDetailsModal] =
    useState<boolean>(false);
  const { loading, data } = useQuery(GET_PROJECTS);

  useEffect(() => {
    if (data) {
      setProjects(data.projects);
    }
  }, [data]);

  const handleShowViewDetailsModal = (service: any) => {
    setSelectedProject(service);
    setShowViewDetailsModal(true);
  };

  const handleCloseViewDetailsModal = () => {
    setShowViewDetailsModal(false);
    setSelectedProject(null);
  };

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <>
          <ProjectCardLoader /> <ProjectCardLoader /> <ProjectCardLoader />
        </>
      ) : projects && projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClickViewDetails={() => handleShowViewDetailsModal(project)}
          />
        ))
      ) : (
        <NotFound message={"No Projects Found"} />
      )}

      <ViewProjectDetailsModal
        isOpen={showViewDetailsModal}
        closeModal={handleCloseViewDetailsModal}
        data={selectedProject}
      />
    </div>
  );
};

export default ResidentialProjectsTab;
