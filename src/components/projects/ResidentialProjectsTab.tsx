import React from 'react';
import ProjectCard from './ProjectCard';
import { ourProjects } from '@/data/ourProjects';

const ResidentialProjectsTab = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {ourProjects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ResidentialProjectsTab
