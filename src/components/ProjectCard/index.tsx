import {
  IProjectCard
} from "../../@types";

import {
  ProjectCardContainer,
  ImageContainer,
  IconsContainer,
  ProjectName
} from "./styles";

import {
  IoLinkOutline,
  IoLogoGithub
} from 'react-icons/io5';

import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

const ProjectCard: React.FC<IProjectCard> = ({
  codeUrl,
  imageUrl,
  projectName,
  projectUrl
}) => {
  const theme = useContext(ThemeContext);

  return (
    <ProjectCardContainer>
      <ImageContainer
        url={imageUrl}
      >
        <img className="img" src={imageUrl} alt={projectName} />

        <IconsContainer>
          <a aria-label={`link para acessar o repositório do github com o código fonte do projeto ${projectName}.`} href={codeUrl} target="_blank" rel="noreferrer">
            <IoLogoGithub color={theme.colors.buttonTextColor} size={20} />
          </a>

          <a aria-label={`link para acessar o projeto ${projectName}.`} href={projectUrl} target="_blank" rel="noreferrer">
            <IoLinkOutline color={theme.colors.buttonTextColor} size={20} />
          </a>
        </IconsContainer>
      </ImageContainer>

      <ProjectName>{projectName}</ProjectName>
    </ProjectCardContainer>
  );
};

export default ProjectCard;