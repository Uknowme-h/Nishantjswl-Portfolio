import React from "react";
import { SectionWrapper } from "../hoc";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full  p-[1px] rounded-[34px] "
      style={{
        background: "#010038",
        boxShadow: "-16px -16px 17px #000016,16px 16px 17px #02005a",
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=" rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview</h2>
      </motion.div>
      <a
        href="https://drive.google.com/file/d/1MCqB04C8A-TdKFKKtUfXRNd4wBdjwqHp/view?usp=sharing"
        target="_blank"
        className="absolute sm:right-[100px] right-[50px] top-[100px] text-white p-2 rounded-lg transition duration-300 ease-in-out hover:scale-105 "
        style={{
          background: "linear-gradient(145deg, #01003c, #010032)",
          boxShadow: "5px 5px 10px #01001f,-5px -5px 10px #010051",
          fontSize: "14px", // Added font size for small devices
        }}
      >
        <FontAwesomeIcon icon={faDownload} /> Download CV
      </a>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        style={{
          fontSize: "14px", // Added font size for small devices
        }}
      >
        I'm a passionate web developer diving headfirst into the world of AI/ML.
        My experience spans across JavaScript, TypeScript, React, and Three.js
        for building web applications, while Python with libraries like
        scikit-learn and FastAPI fuels my exploration of machine learning. I'm
        constantly expanding my knowledge in both fields, eager to create
        innovative solutions at the intersection of web development and
        artificial intelligence.Im open to new opportunities and challenges.
      </motion.p>

      <motion.div>
        <p className="text-[30px] mt-5">Interests</p>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
