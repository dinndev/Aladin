import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { projects } from "./files";

function Portfolio() {
  return (
    <AnimateSharedLayout type="switch">
      <motion.h1
        layout
        id="portfolio"
        className="text-center me sm:text-5xl text-4xl mb-20"
      >
        Portfolio
      </motion.h1>
      <motion.ul
        layout
        className=" grid md:grid-cols-5 sm:w-3/4 grid-cols-1 sm:grid-cols-2 md:w-8/12 lg:w-3/6 xl:w-5/12  w-9/12 gap-6"
      >
        {projects.map(({ name, description, grid, position, link }, i) => (
          <Card
            index={i}
            grid={grid}
            id={uuidv4()}
            name={name}
            description={description}
            key={uuidv4()}
            position={position}
            link={link}
          />
        ))}
      </motion.ul>
    </AnimateSharedLayout>
  );
}

export default Portfolio;
