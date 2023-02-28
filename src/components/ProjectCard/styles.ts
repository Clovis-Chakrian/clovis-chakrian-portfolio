import styled from "styled-components";
import { IStyledProjectCard } from "../../@types";

export const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  min-height: 165px;
  align-items: center;

  @media screen and (min-width: 650px) {
    width: 50vw;
  };

  @media screen and (min-width: 1000px) {
    width: 30vw;
  };

  @media screen and (min-width: 1300px) {
    width: 20vw;
  }
`;

export const ImageContainer = styled.div<IStyledProjectCard>`
  display: flex;
  flex-direction: column;
  align-items: center;

  .img {
    width: 192px;
    height: 108px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 10px;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: 100vw 130px;
  }

  @media screen and (min-width: 650px) {
    .img {
      width: 50vw;
      max-width: 50vw;
      height: 170px;
    }

    background-size: 100vw 170px;
  }

  @media screen and (min-width: 1000px) {
    .img {
      width: 30vw;
      height: 130px;
    }
  }

  @media screen and (min-width: 1300px) {
    .img {
      width: 20vw;
      height: 130px;
    }
  }
`;

export const IconsContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top-right-radius: 10px;
  padding-top: 5px;
  width: 60px;
`;

export const ProjectName = styled.p`
  font-size: 16px;
  padding: 0px 10px;
  color: ${props => props.theme.colors.buttonTextColor};
`