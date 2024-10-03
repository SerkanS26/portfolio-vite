import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

import items from "/src/projects";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(items);
    console.log(items);
  }, []);

  return (
    <section id="projects" className=" p-4">
      <div className="container mx-auto flex flex-col max-w-md md:max-w-7xl">
        <h2 className="text-primary text-center my-8 font-bold text-4xl md:text-left">
          PORTFOLIO
        </h2>
        {/*Project Container */}
        <div className=" container flex flex-col gap-8 w-full">
          {/* Project Card */}
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
