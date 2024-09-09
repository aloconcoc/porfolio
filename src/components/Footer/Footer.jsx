import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>
      
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's make something <br />
            amazing together.
          </span>
          <span className="primaryText">
            Start by <a href="mailto:tu416164@gmail.com">chat with me</a>
          </span>
        </div>

        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText" >Information</span>
            <p style={{fontWeight: 'bold'}}>Ha Noi</p>
          </div>
          <ul className={css.menu}>
          <li><a href="https://www.facebook.com">FaceBook</a></li>
          <li><a href="https://www.github.com/">Github</a></li>
          <li><a href="https://www.leetcode.com/">Leetcode</a></li>
          <li><a href="https://www.zalo.com/">Zalo</a></li>
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
