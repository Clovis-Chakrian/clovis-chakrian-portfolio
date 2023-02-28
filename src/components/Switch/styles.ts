import styled, { css, keyframes } from "styled-components";

const switchOn = keyframes`
  from {
    transform: translateX(0);
  };

  to {
    transform: translateX(30px);
  }
`;

const switchOff = keyframes`
  from {
    transform: translateX(30px);
  };

  to {
    transform: translateX(0);
  }
`


export const SwitchContainer = styled.div`
  display: grid;
  align-content: center;
  height: 17px;
  width: 47px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 20px;
  :hover {
    cursor: pointer;
  };

  ${props => props.theme.title === 'light' && css`
    border: 1px solid ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.background};
  `}
`;

export const SwitchCircle = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.tertiary};
  ${props => props.theme.title === 'dark' && css`
    animation: ${switchOn} 0.5s normal both;
  `};
  ${props => props.theme.title === 'light' && css`
    animation: ${switchOff} 0.5s normal both;
    background-color: ${props => props.theme.colors.secondary};
  `}
`;