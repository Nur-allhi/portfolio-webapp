import React, { useState } from "react";

import bgVideo from "../../Video/bgVideo.mp4";
import {
  AboutContainer,
  AboutBg,
  VideoBg,
  AboutContent,
  AboutH1,
  AboutP,
  CvBtnWrapper,
  CvDownload,
  CvDownloadFilled,
  Button,
} from "./AboutEelements";

const AboutSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <AboutContainer>
      <AboutBg>
        <VideoBg autoPlay loop muted src={bgVideo} type="video/mp4" />
      </AboutBg>

      <AboutContent>
        <AboutP>Hi There 👋, I am </AboutP>
        <AboutH1>Nur E Allhi</AboutH1>
        <CvBtnWrapper>
          <Button onMouseEnter={onHover} onMouseLeave={onHover}>
            Download Resume{hover ? <CvDownloadFilled /> : <CvDownload />}
          </Button>
        </CvBtnWrapper>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;
