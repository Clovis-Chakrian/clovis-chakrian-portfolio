import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    padding-top: 100%;
    opacity: 0;
  }

  to {
    padding-top: 0%;
    opacity: 1;
  }
`

const scrowDown = keyframes`
  from {
    top: 82%;
    opacity: 0.1;
  }

  to {
    top: 90%;
    opacity: 1;
  }
`

export const Container = styled.article`
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-snap-type: y mandatory;
  height: 100vh;
  width: 100vw;
  padding-left: 0px;

  section {
    scroll-snap-align: start;
    display: flex;
    flex: 1;
    width: 100vw;
  }
`;

export const HomeSection = styled.section`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${slideIn} 1.6s normal;
  height: 100vh;

  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .home-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 100px;
  };

  h2 {
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
  };

  h2 span {
    text-decoration-line: underline;
  };

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.alternativeHighContrastText};
  };

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-top: 22px;
    width: 167px;
    height: 41px;
    border-radius: 20px;
    border: none;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.buttonTextColor};
    transition: 100ms;
  };

  button:active {
    background-color: ${props => `${props.theme.colors.secondary}30`};
  };

  .icon {
    position: sticky;
    top: 80%;
    animation: ${scrowDown} 1.4s alternate infinite
  };

  .icon:hover {
    cursor: pointer;
  }

  /* @media screen and (min-width: 700px) {
    .home-container {
      display: flex;
      width: 50vw;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-evenly
    }
  }; */

  @media screen and (min-width: 700px) {
    .home-container {
      display: flex;
      width: 80vw;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-evenly
    }

    img {
      width: 360px;
      height: 360px;
      border-radius: 300px;
    };

    h2 {
      font-size: 30px;
    };

    p {
      font-size: 20px;
    };
  }
`;

export const SkillsSection = styled.section`
  padding-top: 60px;
  height: 150vh;
  flex-direction: column;

  .skills-content {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  };
`;

export const ProjectsSection = styled.section`
  padding-top: 60px;
  height: 100vh;
  flex-direction: column;

  .projects-content {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-self: center;
    padding: 0px 10px;
    align-items: center;
  };

  @media screen and (min-width: 650px) {
    .projects-content {
      width: 100vw;
      flex-direction: row;
    };
  }
`;

export const ContactSection = styled.section`
  height: 170vh;
  padding-top: 60px;
  flex-direction: column;

  .contact-content {
    display: flex;
    flex-direction: column;
  };

  .contact-content .social-buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  };

  .social-buttons a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    width: 95vw;
    height: 52px;
    padding: 0px 14px;
    transition: 200ms;
  };

  .social-buttons a:hover {
    opacity: 0.7;
  }

  h2 {
    display: none;
  }

  a p {
    font-size: 16px;
  };

  .linkedin {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.buttonTextColor};
  }

  .email {
    background-color: #780000;
    color: ${props => props.theme.colors.buttonTextColor};
  };

  .subtitle {
    font-size: 18px;
    width: fit-content;
    align-self: center;
    margin-bottom: 10px;
  };

  .contact-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .name-inputs {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-evenly;
    margin-bottom: 3px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  button {
    width: 95vw;
    height: 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.secondary};
    font-size: 18px;
    border-radius: 5px;
    border: none;
    margin-top: 20px;
    color: ${props => props.theme.colors.buttonTextColor};
  }

  @media screen and (min-width: 1100px) {
    .contact-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 0px 10px;
    }

    .contact-options {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50vw;
    }

    .social-buttons a { 
      width: 47.25vw;
    };

    .name-inputs {
      width: 50vw;
    };

    button {
      width: 47.25vw;
    };

    h2 {
      display: flex;
      align-self: flex-start;
      text-align: center;
      justify-self: center;
      margin-left: 12vw;
      width: 20vw;
    }
  }
`;

export const AboutSection = styled.section`
  height: 150vh;
  padding-top: 60px;
  flex-direction: column;
  
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
  };

  .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 100px;
  };

  h2 {
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
  };

  h2 span {
    text-decoration-line: underline;
  };

  p {
    font-size: 14px;
    color: ${props => props.theme.colors.alternativeHighContrastText};
  };

  .bio {
    width: 90vw;
    text-align: center;
    font-size: 14px;
    color: ${props => props.theme.colors.text};
    margin-top: 20px;
  };

  @media screen and (min-width: 700px) {
    img {
      width: 360px;
      height: 360px;
      border-radius: 300px;
    };

    h2 {
      font-size: 30px;
    };
    
    p {
      font-size: 20px;
    };

    .about-content {
      flex-direction: row;
      /* padding: 0px 10px; */
      justify-content: space-evenly;
    };

    .bio {
      width: 45vw;
      font-size: 16px;
    }
  }
`;