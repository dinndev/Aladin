import React from "react";
import { motion } from "framer-motion";

function Modal({ name, image, description, id }) {
  return (
    <motion.div layoutId={id}>
      <motion.h1>{name}</motion.h1>
      <motion.p>{description}</motion.p>
      <motion.div>
        <motion.div className="flex w-full justify-center h-12  items-center">
          <a
            href="mailto:dinndev@gmail.com"
            className="border-slate-500 border mr-9 rounded min-w-lg h-10  contact-btn text-xs p-2 flex justify-center items-center text-gray-500"
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
          <button className="font-bold btn">Portfolio</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
