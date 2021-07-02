import styled from "styled-components";
import { BsCloudDownload } from "react-icons/bs";
import { GiCloudDownload } from "react-icons/gi";

export const AboutContainer = styled.div`
  /* background: #0c0c0c; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 750px;
  position: relative;
  z-index: 1;
`;

export const AboutBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  z-index: -1;
`;

export const AboutContent = styled.div`
  z-index: 3;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  width: 700px;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 400px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AboutH1 = styled.h1`
  font-size: 58px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutH3 = styled.h3`
  color: #fff;
  font: 28px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const AboutP = styled.p`
  color: #fff;
  font-size: 25px;
  text-align: center;
  font-family: "Ubuntu Mono", monospace;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CvBtnWrapper = styled.div`
  margin-top: 32px;
`;

// Custom Button:
export const CvDownloadButton = styled.button`
  display: inline-block;
  padding: 0.65em 1.6em;
  border: 3px solid #ffffff;
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.5em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Ubuntu Mono", monospace;
  font-weight: 300;
  color: #ffffff;
  text-align: center;
  transition: all 0.2s;
  animation: bn13bouncy 4s infinite linear;
  position: relative;
  background-color: transparent;

  &:hover {
    background-color: white;
    color: #000000;
  }

  @keyframes bn13bouncy {
    0% {
      top: 0em;
    }
    40% {
      top: 0em;
    }
    43% {
      top: -0.9em;
    }
    46% {
      top: 0em;
    }
    48% {
      top: -0.4em;
    }
    50% {
      top: 0em;
    }
    100% {
      top: 0em;
    }
  }
`;

export const CvDownload = styled(BsCloudDownload)`
  margin-left: 8px;
  font-size: 20px;
`;

export const CvDownloadFilled = styled(GiCloudDownload)`
  margin-left: 8px;
  font-size: 20px;
`;
