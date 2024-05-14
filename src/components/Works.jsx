import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { int, string } from "three/examples/jsm/nodes/Nodes.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="group p-5 rounded-2xl sm:w-[360px] w-full"
        style={{
          background: "linear-gradient(145deg, #0b0e1f, #0d1124)",
          boxShadow: "20px 20px 60px #05060e,-20px -20px 60px #131a36",
        }}
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full group-hover:scale-110 transition duration-500  object-cover  object-cover rounded-2xl "
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => {
                window.open(source_code_link, "_blank");
              }}
              className="black-gradient w-10 h-10 
          rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 
              object-contain animate-pulse"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={`tag-${index}`}
              className={`text-[14px] ${tag.color} px-2 py-1 rounded-lg`}
            >
              #{tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={` ${styles.heroSubText} font-light saturate-[1]`}>
          <span className="text-[green]">
            *// Some of my recent projects //*{" "}
          </span>
        </p>
        <h1 className={`${styles.heroSubText}`}>{"<projects>"}</h1>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-[17px] text-[green] max-w-3xl leading-[30px]"
        >
          //Here are some of the projects I've worked on. Click on the project
          card to view the project details.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-20  text-[17px] text-[green] max-w-3xl leading-[30px]"
        >
          // Follow me on Github to Stay Updated with my latest projects.
        </motion.p>
      </div>

      <motion.div variants={textVariant()}>
        <h1 className={`${styles.heroSubText}`}>{"</projects>"}</h1>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
