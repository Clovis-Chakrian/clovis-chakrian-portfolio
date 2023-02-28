import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string,

    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      icons: string

      background: string,
      inputBackgroundColor: string,
      inputPlaceholderColor: string,
      buttonTextColor: string,
      inputTextColor: string

      text: string,
      alternativeHighContrastText: string
    }
  }
};

export interface IStyledApp {
  blur: boolean
};

export interface IStyledProjectCard {
  url: string
}