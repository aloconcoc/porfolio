import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My standout project</span>
            <p style={{ marginTop: "10px" }}>Some of my passionate personal projects</p>
          </div>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://github.com/phantu820/my-ecommerce-v2"><motion.img variants={fadeIn("up", "tween", .5, .6)} src="./p1.png" alt="project" className={`${css.images}`} /></a>
          <a href="https://github.com/phantu820/"><motion.img variants={fadeIn("up", "tween", .7, .6)} src="./p2.png" alt="project" className={`${css.images}`} /></a>
          <a href="https://github.com/phantu820/"><motion.img variants={fadeIn("up", "tween", .9, .6)} src="./p3.png" alt="project" className={`${css.images}`} /></a>
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
