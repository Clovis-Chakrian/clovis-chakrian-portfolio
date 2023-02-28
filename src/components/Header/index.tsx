import {
  HeaderMenu,
} from './styles';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from '../Switch';

// Icons imports
import { IoMenu } from 'react-icons/io5';

// Images imports
import { IHeader } from '../../@types';

const Header: React.FC<IHeader> = ({
  handleChangeTheme,
  handleOpenMenu
}) => {
  const { colors } = useContext(ThemeContext);

  return (
    <HeaderMenu>
      <p>
        <IoMenu onClick={handleOpenMenu} size={28} color={colors.icons} />
      </p>

      <h1 aria-label='Identidade visual de Clóvis Chakrian.'>
        <img src="https://ik.imagekit.io/chakriandev/portfolio/logo.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1677623006093" alt="identidade visual de Clóvis Chakrian" width={120} height={58.4} />
      </h1>
      <Switch
        onChange={handleChangeTheme}
      />
    </HeaderMenu>
  );
}

export default Header;

// {`/* Clóvis`} <br />
// Chakrian */