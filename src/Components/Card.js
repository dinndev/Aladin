import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function Card({ children, grid, description, name }) {
  const [toggleData, setToggleData] = useState(false);
  const handleToggleData = () => {
    setToggleData(!toggleData);
  };

  return (
    <motion.div
      onClick={handleToggleData}
      className={`p-5 select-none cursor-pointer border-gray-600 border flex flex-col rounded-lg ${
        grid === 2 ? "md:col-span-3 col-span-1" : "md:col-span-2 col-span-1"
      } `}
    >
      <p className="card-name font-bold">{name}</p>
      <p
        className={`card-description select-none ${
          grid === 2 ? " justify-around mt-8" : "mt-4 justify-center "
        }`}
      >
        {description}
      </p>
      {toggleData && <motion.div>aladin penagunda</motion.div>}
    </motion.div>
  );
}

export default Card;
