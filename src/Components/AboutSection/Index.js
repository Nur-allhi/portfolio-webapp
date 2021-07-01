import React, { useState } from "react";
import bgVideo from "../../Video/bgVideo.mp4";
import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutH3,
  CvBtnWrapper,
  CvDownload,
  CvDownloadFilled,
  CvDownloadButton,
  AboutP,
} from "./AboutEelements";

const AboutSection = () => {
  // const [hover, setHover] = useState(false);

  // const onHover = () => {
  //   setHover(!hover);
  // };

  return (
    <AboutContainer>
      <AboutBg>
        <VideoBg autoPlay loop muted src={bgVideo} type="video/mp4" />
      </AboutBg>

      <AboutContent>
        <AboutH3>Hi There 👋, I am </AboutH3>
        <AboutH1>Nur E Allhi</AboutH1>
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
    // onMouseEnter={onHover} onMouseLeave={onHover}
    //  Download Resume{hover ? <CvDownloadFilled /> : <CvDownload />}
  );
};

export default AboutSection;
