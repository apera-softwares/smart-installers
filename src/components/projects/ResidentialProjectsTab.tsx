"use client";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECTS } from "@/graphql/queries";
import ProjectCard from "./ProjectCard";
//import { ourProjects } from "@/data/ourProjects";
import ProjectCardLoader from "./ProjectCardLoader";

const ResidentialProjectsTab = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const { loading, data } = useQuery(GET_PROJECTS);

  useEffect(() => {
    if (data) {
      setProjects(data.projects);
    }
  }, [data]);

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {loading ? (
        <>
          <ProjectCardLoader /> <ProjectCardLoader /> <ProjectCardLoader />
        </>
      ) : projects && projects.length > 0 ? (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      ) : (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 text-lg py-4 text-center font-bold">
          No Project Found
        </div>
      )}
    </div>
  );
};

export default ResidentialProjectsTab;
