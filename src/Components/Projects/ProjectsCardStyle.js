import styled from "styled-components";

export const SectionHeading = styled.h1`
  text-align: center;
`;
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1000px;
  margin: 20px auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90vw;
  }
`;

export const Card = styled.div`
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 45%;
  margin: 20px 10px;
  border-radius: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

export const ImageContainer = styled.div``;
export const CardImage = styled.img`
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 320px;
  }
`;

export const CardContent = styled.div`
  margin: 10px 0;
`;

export const CardTitle = styled.h2``;

export const CardDetails = styled.p`
  margin-top: 10px;
`;

export const CardButton = styled.button`
  margin: 20px 0;
  height: 40px;
  width: 200px;
  border: none;
  font-size: 18px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;
  background: #01bf71;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    transition: all 0.2s ease-in-out;
    background: #fff;
  }

  & a {
    text-decoration: none;
    color: black;
  }
`;
