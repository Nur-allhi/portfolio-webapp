import React from "react";
import ProjectsCard from "./ProjectsCard";
import { CardContainer, SectionHeading } from "./ProjectsCardStyle";

const projectSDetails = [
  {
    name: "Cure Your Pc",
    image: "https://i.ibb.co/8DBgG8q/cure-your-pc.png",
    details:
      "Its a Computer repair website. This app will give a some resonabale prize option to fix your pc problem. can be Order, Manage order by admin and customer, admin panle also available",
    link: "https://cure-your-pc.web.app/",
  },
  {
    name: "Fluffy Book Store",
    image: "https://i.ibb.co/vJkTQzy/Fluffy-book.jpg",
    details:
      "This website contain programming Books, Order Process, Admin Panle, Add Book, Etc.",
    link: "https://fluffy-book-store.web.app/",
  },
  {
    name: "Trip Maker",
    image: "https://i.ibb.co/r2f5jDR/trip-maker.png",
    details: "Ride sharing app, Your can call your todays ride with this app.",
    link: "https://trip-maker-e059e.web.app/",
  },
  {
    name: "Tempreture Hot",
    image: "https://i.ibb.co/xFTVftS/ighly-Compressed.jpg",
    details: "Check the weather outside",
    link: "https://nur-allhi.github.io/temperature-hot/",
  },
];

const Projects = () => {
  return (
    <div id="projects">
      <SectionHeading>Projects</SectionHeading>
      {/* <Fade left> */}
      <CardContainer>
        {projectSDetails.map((projects) => (
          <ProjectsCard projects={projects}></ProjectsCard>
        ))}
      </CardContainer>
      {/* </Fade> */}
    </div>
  );
};

export default Projects;
