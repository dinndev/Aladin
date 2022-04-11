import React from "react";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

function Portfolio() {
  const projects = {
    project1: {
      name: "Moonbank",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
    },
    project2: {
      name: "Moonbank",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
    },
    project3: {
      name: "Moonbank",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
    },
    project4: {
      name: "Moonbank",
      description:
        "A bank simulation app that  allows user to budget all the expences and creata transactions to other users. and also allows users to withdraw  and deposit money.",
    },
  };
  const projectsArray = [
    projects.project1,
    projects.project2,
    projects.project3,
    projects.project4,
  ];

  return (
    <>
      {projectsArray.map(({ name, description }) => (
        <Card key={uuidv4()}>{description}</Card>
      ))}
    </>
  );
}

export default Portfolio;
