import styled from "styled-components";

export const SkillsContainer = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 2.5rem auto;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 90vw;
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 40%;
  margin: 10px 0;
  background: white;
  border-radius: 1rem;

  @media screen and (max-width: 768px) {
    width: 350px;
  }
`;

export const SkillLogo = styled.div`
  background: white;
  padding: 0.5rem;
  border-radius: 1rem;
  margin-right: 10px;
`;

export const SkillImage = styled.img`
  width: 40px;
`;

export const SkillProgressBar = styled.div`
  background: white;
  padding: 0.5rem;
  border-radius: 0.3rem;
`;
