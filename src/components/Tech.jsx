import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { styles } from "../style";

const Tech = () => {
  return (
    <>
    
     <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Tech We Use</h2>
        {/* <p className={styles.sectionSubText}>We Use</p> */}
      </motion.div>
    <div className="flex flex-row flex-wrap justify-center mt-10 gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
      </>
  );
};

export default SectionWrapper(Tech, "tech");
