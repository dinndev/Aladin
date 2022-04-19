import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";
import { projects } from "./files";

function Card({ grid, description, name, id, image, position, index }) {
  const [selected, setSelected] = useState(null);

  const file = selected !== false ? projects[selected] : null;
  return (
    <>
      <motion.li
        onClick={() => setSelected(index)}
        layout={"position"}
        whileHover={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 30,
        }}
        className={`p-5 select-none z-0 card cursor-pointer border-gray-600 border flex flex-col rounded-lg ${
          grid === 2 ? "md:col-span-3 col-span-1" : "md:col-span-2 col-span-1"
        } ${file && "pointer-events-none"}`}
      >
        <motion.p layout={"position"} className="card-name font-bold">
          {name}
        </motion.p>
        <motion.p
          layout={"position"}
          className={`card-description select-none ${
            grid === 2 ? " justify-around mt-8" : "mt-4 justify-center "
          }`}
        >
          {description}
        </motion.p>
      </motion.li>
      <AnimatePresence>
        {file && (
          <motion.div
            layoutId={"file-" + selected}
            key={"fileId" + selected}
            onClick={(e) => e.target === e.currentTarget && setSelected(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
            layout="position"
            className="flex justify-center backdrop-blur-sm fixed cursor-pointer z-10 w-full top-0 left-0 right-0 bottom-0 flex-col overlay items-center"
          >
            <motion.div
              layoutId={"file-" + selected}
              key={"fileId" + selected}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              exit={{ opacity: 0, scale: 0 }}
              className="z-20 grid grid-cols-2 cursor-auto grid-rows-2 w-2/3 rounded-lg bg-white h-4/5 p-10 justify-items-center place-items-center "
              layout="position"
            >
              <motion.div className="flex flex-col justify-evenly h-full">
                <p className="text-left">{file.name}</p>
                <motion.p>{file.description}</motion.p>
                <div></div>
              </motion.div>
              <motion.img className="col-span-1 " src={file.imgOne} alt="" />
              <motion.img className="col-span-1" src={file.imgTwo} alt="" />
              <motion.p className="col-span-1">{file.description}</motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
