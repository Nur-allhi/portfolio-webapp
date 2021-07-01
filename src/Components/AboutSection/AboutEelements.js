import styled from "styled-components";
import { BsCloudDownload } from "react-icons/bs";
import { GiCloudDownload } from "react-icons/gi";

export const AboutContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
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
  align-items: center;
  /* text-align: center; */
`;

export const AboutH1 = styled.h1`
  font-size: 48px;
  color: #fff;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const AboutP = styled.p`
  color: #fff;
  font: 30px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const CvBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const Button = styled.button`
  border-radius: 50px;
  background: #47597e;

  white-space: nowrap;
  padding: 16px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #dbe6fd;
    color: #010606;
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
