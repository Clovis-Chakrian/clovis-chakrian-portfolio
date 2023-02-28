import styled from "styled-components";

interface IModalProps {
  show: boolean
}

export const Modal = styled.div<IModalProps>`
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  padding-right: ${props => props.show ? '0' : '100%'};
  flex-direction: column;
  align-items: center;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #00304928;
  transition: 300ms;
  /* transition: 500ms visibility; */
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  padding: 15px;

  .close-menu:hover {
    cursor: pointer;
  }
`;

export const Nav = styled.nav`
  margin-top: 20px;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavListItem = styled.li<IModalProps>`
  list-style-type: none;
  margin-bottom: 20px;
  font-size: 20px;
  opacity: ${props => props.show ? 1 : 0};
  transition: 200ms;
  -webkit-text-stroke: 0.7px ${props => props.theme.colors.secondary};
  border-bottom: 0px solid ${props => props.theme.colors.alternativeHighContrastText};

  :hover {
    cursor: pointer;
    border-bottom: 1px solid ${props => props.theme.colors.alternativeHighContrastText};
  };

  @media screen and (min-width: 600px) {
    font-size: 30px;
    -webkit-text-stroke: 1.3px ${props => props.theme.colors.secondary};
  };
`;