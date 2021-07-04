import React from "react";
import SkillCard from "./SkillCard";
import { SectionHeading } from "../Projects/ProjectsCardStyle";
import { SkillsContainer } from "./SkillsStyle";
const skillDetails = [
  {
    id: 1,
    name: "HTML5",
    completed: "90",
    image: "/images/html.png",
    ProgressBarColor: "#F4400F",
    transitionDuration: "3s",
  },
  {
    id: 2,
    name: "CSS3",
    completed: "80",
    image: "/images/css.png",
    ProgressBarColor: "#2494f4",
  },
  {
    id: 3,
    name: "Javascript",
    completed: "70",
    image: "/images/js.png",
    ProgressBarColor: "#fbd304",
  },
  {
    id: 4,
    name: "React js",
    completed: "50",
    image: "/images/react.png",
    ProgressBarColor: "#648fca",
  },
  {
    id: 5,
    name: "Node js",
    completed: "20",
    image: "/images/node.png",
    ProgressBarColor: "#328337",
  },
  {
    id: 6,
    name: "MongoDb",
    completed: "60",
    image: "/images/mongodb.png",
    ProgressBarColor: "#47a437",
  },
];

const Skills = () => {
  return (
    <>
      <SectionHeading>Skills</SectionHeading>
      <SkillsContainer>
        {skillDetails.map((skillData) => (
          <SkillCard key={skillData.id} skillData={skillData}></SkillCard>
        ))}
      </SkillsContainer>
    </>
  );
};

export default Skills;
