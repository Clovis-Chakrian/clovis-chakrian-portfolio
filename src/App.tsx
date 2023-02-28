import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { AppComponent } from './styles/global';
import { dark, light } from './styles/themes';
import { Header, Menu } from './components';
import usePersistedTheme from './utils/usePersistedTheme';
import useOpenMenu from './utils/useOpenMenu';
import { Home } from './pages';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [theme, setTheme] = usePersistedTheme('theme', dark);
  const [isMenuOpen, setIsMenuOpen] = useOpenMenu();

  function switchTheme() {
    setTheme(theme.title === 'dark' ? light : dark);
  }

  function switchMenuState() {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Menu
        handleCloseMenu={switchMenuState}
        showMenu={isMenuOpen}
      />
      <AppComponent blur={isMenuOpen ? true : false} className="App">
        <Header
          handleOpenMenu={switchMenuState}
          handleChangeTheme={switchTheme}
        />
        <Home />
        <ToastContainer />
      </AppComponent>
    </ThemeProvider>
  );
}

export default App;
