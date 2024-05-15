import React, { useRef } from "react";
import imageSrcR from "./react.png";
import imageSrcA from "./antibody.png";
import imageSrcD from "./deeplearning.png";
import imageSrcS from "./splatoon.jpeg";
import imageSrcP from "./puyoteto.png";
import imageSrcW from "./we_were_here.png";
import { CiLocationOn } from "react-icons/ci";
import { GiJapan } from "react-icons/gi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Body = () => {
  const constraintsRef = useRef(null);

  return (
    <AnimatePresence>
      <motion.div
        className="body-container"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <div className="img" ref={constraintsRef}>
          <motion.div
            className="img1"
            drag
            dragConstraints={constraintsRef}
            style={{ position: "relative" }}
            variants={item}
          >
            <img src={imageSrcR} alt="Example" />
          </motion.div>

          <motion.div
            className="img2"
            drag
            dragConstraints={constraintsRef}
            style={{ position: "relative" }}
            variants={item}
          >
            <img src={imageSrcA} alt="Example" />
          </motion.div>

          <motion.div
            className="img3"
            drag
            dragConstraints={constraintsRef}
            style={{ position: "relative" }}
            variants={item}
          >
            <img src={imageSrcD} alt="Example" />
          </motion.div>
        </div>

        <motion.div className="profile" variants={item}>
          <h2>Profile</h2>
          <h1>YUSEI ITO</h1>
          <p>
            Hello, welcome to my website. I'm a second-year master's student
            majoring in <span className="bold-italic-words">Immunology</span>{" "}
            and <span className="bold-italic-words">Data Science</span>. I'm
            passionate about merging{" "}
            <span className="bold-italic-words">Immunology</span> with{" "}
            <span className="bold-italic-words">Data Science</span> and am
            dedicated to acquiring new knowledge and skills in this field.
          </p>
          <br />
          <p>
            Currently, I'm interested in roles in engineering, aiming to build a
            career in the field of{" "}
            <span className="bold-italic-words">Data Science</span>. I find joy
            in analyzing data and using it to solve problems and make informed
            decisions.
          </p>
          <ul className="contact-list">
            <li>
              <span>
                <CiLocationOn className="location-icon" size={20} />
              </span>
              <strong>Location:</strong> Tokyo, Japan
              <GiJapan className="japan-icon" size={30} />
            </li>
            <li>
              <span>
                <HiOutlineAcademicCap className="univ-icon" size={20} />
              </span>
              <strong>University:</strong> Tokyo Tech
            </li>
          </ul>
        </motion.div>

        <motion.div className="skills" variants={container}>
          <br />
          <h2>Skills</h2>
          <div className="skills-list">
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>
                <FaPython className="python-icon" size={64} />
              </span>
              <strong>Python</strong>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>
                <FaJava className="java-icon" size={64} />
              </span>
              <strong>Java</strong>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>
                <IoLogoJavascript className="javascript-icon" size={64} />
              </span>
              <strong>Javascript</strong>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.7 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span>
                <FaReact className="react-icon" size={64} />
              </span>
              <strong>React</strong>
            </motion.li>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <h2>Favorite Games</h2>
          <div className="Favorite">
            <div className="splatoon">
              <a
                href="https://www.nintendo.com/jp/switch/av5ja/index.html"
                target="_blank"
              >
                <div className="img_splatoon">
                  <img src={imageSrcS} alt="Splatoon" />
                </div>
              </a>
            </div>
            <div className="puyoteto">
              <a href="https://puyo.sega.jp/puyopuyotetris/" target="_blank">
                <div className="img_puyoteto">
                  <img src={imageSrcP} alt="Puyo Puyo Tetris" />
                </div>
              </a>
            </div>
            <div className="we_were_here">
              <a
                href="https://store.steampowered.com/app/582500/We_Were_Here/?l=japanese"
                target="_blank"
              >
                <div className="img_we_were_here">
                  <img src={imageSrcW} alt="We Were Here" />
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Body;
