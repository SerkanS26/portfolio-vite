import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import PropTypes from "prop-types";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-gray-200 rounded-3xl mb-5 p-5 shadow-lg shadow-slate-500 flex flex-col gap-8 w-full h-auto lg:h-96 md:flex-row">
      {/* Project Image  Left */}
      <div className="w-full rounded-3xl h-full shadow-xl shadow-gray-500">
        <img
          src={`/src/assets/images${project.img}`}
          alt={project.title}
          width={0}
          height={0}
          sizes="100%"
          className="w-full h-full rounded-3xl"
        />
      </div>
      {/* Project Description Right*/}
      <div className=" w-full h-full">
        <h3 className="text-center text-2xl lg:text-3xl mb-4 text-primary font-bold">
          {project.title}
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-2 lg:mt-12">
          {project.desc.split(",").map((desc, index) => (
            <span
              key={index}
              className="text-md font-bold text-gray-600 shadow-lg p-3"
            >
              {desc.trim()}
            </span>
          ))}
        </div>
        {/* Project Links */}
        <div className="flex justify-center items-center gap-4 mt-10">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center bg-gray-500 text-white p-2 rounded-lg shadow-lg hover:bg-gray-600 ease-in duration-200"
          >
            Code
            <FaGithub className="inline-block ml-2 text-xl" />
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center bg-primary text-white p-2 rounded-lg shadow-lg hover:bg-blue-400 ease-in duration-200"
          >
            Demo
            <FaExternalLinkAlt className="inline-block ml-2 text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
