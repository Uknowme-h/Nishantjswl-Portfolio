import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { staggerContainer } from "../utils/motion";
const Hero = () => (
  <section className="relative w-full h-screen mx-auto">
    <div
      className={`${styles.paddingX} absolute 
      inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}
    >
      <div className="flex flex-col justify-center items-center mt-5 animate-pulse">
        <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient " />
      </div>

      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5, 0.75)}
          // className='w-full  p-[1px] rounded-[34px] '
          // style={{
          //   background: "#050816",
          //   boxShadow: '41px 41px 82px #020309, -41px -41px 82px #080d23'
          // }}
        >
          <h1 className={`${styles.heroHeadText}`}>
            HI, I'm{" "}
            <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent  font-black">
              Nishant Jaiswal
            </span>
          </h1>
          <h1 className={`${styles.heroSubText} mt-1`}>
            An AI/ML Enthusiast & Web Developer from Nepal 🇳🇵
          </h1>
        </motion.div>
      </motion.section>
    </div>
    <div className="h-[250px] w-full relative top-[45%] flex sm:visible invisible">
      <ComputersCanvas />
    </div>

    <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center ">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4  flex justify-center items-start p-2 ">
          <motion.div
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-3 h-3 rounded-full border-1 border-primary bg-secondary mb-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
          />
        </div>
      </a>
    </div>
  </section>
);

export default Hero;
