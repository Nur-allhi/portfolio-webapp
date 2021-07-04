import React from "react";
import MovingText from "react-moving-text";

import {
  AboutContainer,
  AboutContent,
  AboutH1,
  AboutH3,
  CvBtnWrapper,
  CvDownloadButton,
  AboutP,
} from "./AboutStyle";

const AboutSection = () => {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutH3>Hi There 👋, I am </AboutH3>
        <MovingText
          type="popIn"
          duration="5000ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
        >
          <AboutH1>Nur E Allhi</AboutH1>
        </MovingText>
        <br />
        <AboutP>
          Self taught web-developer, I have done multiple projects till now.
          With some good reviews. I have gave a new life to some amazing website
          designs with my coding skills.
          <br />
          <br />I can turn your requirement into a good looking website.
        </AboutP>
        <CvBtnWrapper>
          <CvDownloadButton>
            <a
              href="https://drive.google.com/file/d/10A4Zwp6Cl2SgFw0X9zgE_XfgIx7FEhjo/view?usp=sharing"
              target="blank"
            >
              Download CV
            </a>
          </CvDownloadButton>
        </CvBtnWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
