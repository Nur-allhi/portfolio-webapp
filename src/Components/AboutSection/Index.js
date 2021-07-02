import React from "react";
import MovingText from "react-moving-text";
import bgVideo from "../../Video/bgVideo.mp4";
import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutH3,
  CvBtnWrapper,
  CvDownloadButton,
  AboutP,
} from "./AboutStyle";

const AboutSection = () => {
  return (
    <AboutContainer>
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
          <CvDownloadButton>Download CV</CvDownloadButton>
        </CvBtnWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
