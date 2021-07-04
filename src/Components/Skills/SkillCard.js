import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

import { Card, SkillLogo, SkillImage, SkillProgressBar } from "./SkillsStyle";

const Skillcard = ({ skillData }) => {
  const { name, completed, image, ProgressBarColor, transitionDuration } =
    skillData;
  return (
    <Card>
      <SkillLogo>
        <SkillImage src={image} alt={name} />
      </SkillLogo>
      <SkillProgressBar>
        <ProgressBar
          bgColor={ProgressBarColor}
          baseBgColor="#DBD2CF  "
          height="30px"
          width="200px"
          labelSize="16px"
          transitionDuration={transitionDuration}
          transitionTimingFunction="ease-in-out"
          completed={completed}
        />
      </SkillProgressBar>
    </Card>
  );
};

export default Skillcard;
