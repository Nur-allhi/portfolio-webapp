import React from "react";
import {
  Card,
  ImageContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDetails,
  CardButton,
} from "./ProjectsCardStyle";

const ProjectsCard = (props) => {
  const { name, image, link, details } = props.projects;

  return (
    <Card>
      <ImageContainer className="imgBx">
        <CardImage src={image} alt="" />
      </ImageContainer>
      <CardContent className="content">
        <CardTitle>{name}</CardTitle>
        <CardDetails>{details}</CardDetails>
        <CardButton>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href={link}
            target="blank"
          >
            View site
          </a>
        </CardButton>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
