"use client";
import React from "react";

interface ProjectCardProps {
  project: {
    id: string;
    project: string;
    description: string;
    icon: React.ReactNode;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="px-6 py-8 border border-[#E3E8EF] rounded-2xl">
      <div className="flex items-center justify-center mb-6">
        <span className="w-20 h-20 flex justify-center items-center bg-[#F9F9F9] p-3 border border-gray-300 rounded-lg">
          {project.icon}
        </span>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-bold text-center mb-2">
          {project.project}
        </h3>
        <p className="text-center text-text-muted mb-6">
          {project.description}
        </p>
        <button className="font-semibold underline cursor-pointer">
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
