import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaRegHandPointDown } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer
      id="contact"
      className=" flex items-center justify-center h-60 w-full mt-12 p-4"
    >
      <div className=" w-full h-auto flex flex-col items-center justify-center gap-4">
        <h1 className="text-4xl text-center text-light">
          Contact Me{" "}
          <FaRegHandPointDown className="text-4xl ml-2 text-primary inline" />
        </h1>
        <div className="my-3">
          <a
            href="mailto:serkansafran@outlook.be"
            className="text-2xl text-light  hover:text-primary ease-in duration-200"
          >
            <CiMail className="inline-block text-3xl text-light mr-3  hover:text-primary ease-in duration-200" />
            <span className="text-2xl underline">serkansafran@outlook.be</span>
          </a>
        </div>
        <div className="flex gap-3">
          <a href="https://github.com/SerkanS26" target="_blank">
            <FaGithub className="text-4xl text-light  hover:text-gray-500  rounded-sm cursor-pointer mx-2 ease-in duration-200" />
          </a>
          <a
            href="https://linkedin.com/in/serkan-safran-82aa821ab"
            target="_blank"
          >
            <FaLinkedin className="text-4xl text-light  hover:text-gray-500 rounded-sm cursor-pointer mx-2 ease-in duration-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
