import styled from "styled-components";

export const SkillCardContainer = styled.div`
  width: 30vw;
  height: 100px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: ${props => props.theme.colors.secondary};
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  align-items: center;
  margin-bottom: 18px;
  //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 250ms;

  :hover {
    box-shadow: -22px 12px 12px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 1300px) {
    width: 12vw;
    height: 300px;
    justify-content: space-evenly;
  }
`;


export const SkillCardLabel = styled.p`
  font-size: 14px;
  color: ${props => props.theme.colors.buttonTextColor};

  @media screen and (min-width: 1300px) {
    font-size: 25px;
  }
`;