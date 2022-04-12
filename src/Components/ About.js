import React from "react";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";

function About() {
  return (
    <AnimatePresence>
      <motion.div
        id="about"
        initial={{ opacity: 0, translateY: 50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-between w-full sm:w-full h-1/3 md:w-6/12 items-center"
      >
        <h1 className=" text-center me md:text-6xl text-4xl">Hi, I'm Aladin</h1>
        <p className="text-center w-9/12 sm:w-full my-8 text-md sm:text-xl description">
          Aladin is a creator who enjoy his front end superpowers by <br />
          solving problems and making cool websites.
        </p>
        <div className="flex w-full justify-center h-12 items-center">
          <a
            href="mailto:dinndev@gmail.com"
            className="border-slate-500 border mr-9 rounded min-w-lg h-3/4 sm:h-5/6  contact-btn text-xs p-2 flex justify-center items-center text-gray-500"
          >
            Contact me
            <span className="ml-5">
              <svg
                className="plane"
                width="16"
                height="13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.235 1.626 9.597 11.634a.375.375 0 0 1-.583.09l-2.646-2.49-.3-.282-.334.24-2.037 1.463-.012.008-.011.01a.066.066 0 0 1-.03.016.04.04 0 0 1-.022-.004.068.068 0 0 1-.04-.088l.926-2.461a.374.374 0 0 1 .155-.188l8.252-5.056-.443-.892-9.768 3.819L.72 3.95a.379.379 0 0 1-.095-.403.352.352 0 0 1 .3-.263l13.922-2.211a.374.374 0 0 1 .387.552Z"
                  stroke="#5A5A5A"
                />
              </svg>
            </span>
          </a>
          <Link
            to="portfolio"
            activeClass="active"
            spy={true}
            smooth={true}
            duration={500}
            className="font-bold btn"
          >
            Portfolio
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default About;
