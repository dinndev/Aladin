import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "./Modal";
import { useState } from "react";
import { projects } from "./files";

function Card({ grid, description, name, id, image, position, inde, link }) {
  const [selected, setSelected] = useState(null);

  const file = selected !== false ? projects[selected] : null;
  return (
    <motion.a
      href={link}
      layout={"position"}
      whileHover={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 30,
      }}
      className={`p-5 select-none z-0 card cursor-pointer border-gray-600 border flex flex-col rounded-lg ${
        grid === 2 ? "md:col-span-3 col-span-1" : "md:col-span-2 col-span-1"
      }`}
    >
      <motion.li>
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
    </motion.a>
  );
}

export default Card;
