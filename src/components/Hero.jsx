import { FaGithub, FaLinkedin } from "react-icons/fa";

import TechStack from "./TechStack";
const Hero = () => {
  return (
    <section className="mt-6 px-5 bg-dark md:mt-10" id="hero">
      <div className=" flex flex-col-reverse container mx-auto max-w-md md:max-w-7xl md:flex-row">
        {/* Left */}
        <div className=" flex flex-1 flex-col items-center justify-center my-2">
          <h1 className=" text-5xl  text-light font-bold text-center mb-6 lg:text-7xl lg:text-left">
            Full-stack / Web Developer
          </h1>
          <p className="text-xl text-light text-center mb-6  lg:text-left ">
            A web developer with a focus on the MERN stack, but still exploring
            other technologies and frameworks that catch my interest! if
            you&rsquo;re looking for a developer to add to your team, I&rsquo;d
            love to hear from you!
          </p>
          {/* Social Media */}
          <div className="flex lg:self-start">
            <a href="https://github.com/SerkanS26" target="_blank">
              <FaGithub className="text-4xl text-light  hover:text-gray-500  rounded-sm cursor-pointer mx-2 ease-in duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/serkan-safran-82aa821ab"
              target="_blank"
            >
              <FaLinkedin className="text-4xl text-light  hover:text-gray-500 rounded-sm cursor-pointer mx-2 ease-in duration-300" />
            </a>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-1 items-center justify-center mb-4">
          <img
            src="/src/assets/images/profile.jpg"
            alt="profile picture"
            className="object-cover rounded-full shadow-2xl my-6 "
            width={340}
            height={340}
          />
        </div>
      </div>
      <TechStack />
    </section>
  );
};

export default Hero;
