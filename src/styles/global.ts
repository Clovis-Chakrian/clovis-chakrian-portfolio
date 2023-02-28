import styled, { createGlobalStyle, css } from "styled-components";
import { IStyledApp } from "../@types";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Patrick Hand', cursive;
  };

  input {
    color: ${props => props.theme.colors.buttonTextColor};
  };

  a {
    text-decoration-line: none;
    color:  ${props => props.theme.colors.buttonTextColor};
  }

  body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  };

  article::-webkit-scrollbar {
    width: 7px;
  }
 
  article::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  article::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: 10px;
  }

  button {
    transition: 200ms;
  }

  button:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const AppComponent = styled.div<IStyledApp>`
  transition: 300ms;
  ${props => props.blur && css`
    filter: blur(4px);
  `}
`