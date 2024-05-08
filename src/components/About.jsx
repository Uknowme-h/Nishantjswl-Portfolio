import React from 'react'
import { SectionWrapper } from '../hoc';
import { Tilt } from 'react-tilt';

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import {fadeIn,textVariant} from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  p-[1px] rounded-[34px] '
      style={{
        background: "#010038",
        boxShadow: '-16px -16px 17px #000016,16px 16px 17px #02005a'
      }}
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className=' rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
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
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}> Overview</h2>
      
    </motion.div>

    <motion.p variants={fadeIn("","",0.1,1)}
    className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
    I'm a passionate web developer diving headfirst 
    into the world of AI/ML.  My experience spans across 
    JavaScript, TypeScript, React, and Three.js for building
     web applications, while Python with libraries like 
     scikit-learn and FastAPI fuels my exploration of 
     machine learning. I'm constantly expanding my knowledge 
     in both fields, eager to create innovative solutions at 
     the intersection 
    of web development and artificial intelligence.
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about');