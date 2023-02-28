import {
  Modal,
  Nav,
  NavList,
  NavListItem,
  TopBar
} from "./styles";

import {
  MdMenuOpen,
} from 'react-icons/md';

import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5';

import { ThemeContext } from "styled-components";
import { useContext } from "react";
import { IMenu } from "../../@types";
//import useOpenMenu from "../../utils/useOpenMenu";

const Menu: React.FC<IMenu> = ({
  handleCloseMenu,
  showMenu,
}) => {
  const theme = useContext(ThemeContext);

  function handleScrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);

    section?.scrollIntoView({ behavior: 'smooth' });
    handleCloseMenu()
  };

  return (
    <Modal
      show={showMenu}
    >
      <TopBar>
        <MdMenuOpen className="close-menu" onClick={handleCloseMenu} size={28} color={theme.colors.icons} />

        <div>
          <a aria-label="Link para acessar o linkedin de Clóvis Chakrian." href="https://www.linkedin.com/in/cl%C3%B3vis-chakrian-517228203/" target='_blank' rel='noreferrer'>
            <IoLogoLinkedin style={{ marginRight: 17 }} size={28} color={theme.colors.icons} />
          </a>

          <a aria-label="Link para acessar o github de Clóvis Chakrian." href="https://github.com/Clovis-Chakrian" target='_blank' rel='noreferrer'>
            <IoLogoGithub size={28} color={theme.colors.icons} />
          </a>
        </div>
      </TopBar>

      <Nav>
        <NavList>
          <NavListItem onClick={() => handleScrollToSection('skills')} show={showMenu}>Habilidades</NavListItem>
          <NavListItem onClick={() => handleScrollToSection('projects')} show={showMenu}>Projetos</NavListItem>
          <NavListItem onClick={() => handleScrollToSection('contact')} show={showMenu}>Contato</NavListItem>
          <NavListItem onClick={() => handleScrollToSection('about')} show={showMenu}>Sobre mim</NavListItem>
        </NavList>
      </Nav>
    </Modal>
  );
}

export default Menu;