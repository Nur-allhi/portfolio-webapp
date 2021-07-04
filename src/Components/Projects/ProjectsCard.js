import React from "react";
import Fade from "react-reveal/Fade";
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
      <Fade left>
        <ImageContainer className="imgBx">
          <CardImage src={image} alt="" />
        </ImageContainer>
        <CardContent className="content">
          <CardTitle>{name}</CardTitle>
          <CardDetails>{details}</CardDetails>
          <CardButton>
            <a href={link} target="blank">
              View site
            </a>
          </CardButton>
        </CardContent>
      </Fade>
    </Card>
  );
};

export default ProjectsCard;
