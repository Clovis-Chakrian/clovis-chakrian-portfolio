import styled from 'styled-components';

export const HeaderMenu = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  width: 100%;
  height: 65px;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1.5px solid ${props => props.theme.colors.secondary};
  box-shadow: 2px 3px 4px 0px ${props => props.theme.title === 'dark' ? '#00000075' : '#0080AE75'};
  position: fixed;
  top: 0;
  z-index: 2;

  h1 {
    font-size: 20px;
    -webkit-text-stroke: 0.7px ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.buttonTextColor};
  };

  p:hover {
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  margin-top: 10px;
  /* height: 54px; */
`