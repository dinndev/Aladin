import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { motion } from "framer-motion";

function Portfolio() {
  const projects = {
    project1: {
      name: "Moonbank",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
      grid: 2,
    },
    project2: {
      name: "React mini ui",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
      grid: 1,
    },
    project3: {
      name: "Design",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
      grid: 1,
    },
    project4: {
      name: "Musix",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
      grid: 2,
    },
    project5: {
      name: "Musix",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
      grid: 2,
    },
    project6: {
      name: "Musix",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
      grid: 1,
    },
  };
  const projectsArray = [
    projects.project1,
    projects.project2,
    projects.project3,
    projects.project4,
    projects.project5,
    projects.project6,
  ];

  return (
    <>
      <h1 id="portfolio" className=" text-center me sm:text-5xl text-4xl mb-20">
        Portfolio
      </h1>
      <motion.div className=" cards grid h-2/4 md:grid-cols-5 grid-cols-1 md:w-8/12 xl:w-5/12 w-9/12 sm:w-6/12 gap-4">
        {projectsArray.map(({ name, description, grid }) => (
          <Card
            grid={grid}
            name={name}
            description={description}
            key={uuidv4()}
          />
        ))}
      </motion.div>
    </>
  );
}

export default Portfolio;
