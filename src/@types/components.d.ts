interface ISwitch {
  onChange(): void
};

interface IHeader {
  handleChangeTheme(): void,
  handleOpenMenu(): void
};

interface IMenu {
  handleCloseMenu(): void,
  showMenu: boolean
};

interface ITitle {
  title: string;
};

interface ISkillCard {
  skill: string,
  SkillIcon: JSX
};

interface IProjectCard {
  imageUrl: string,
  codeUrl: string,
  projectUrl: string,
  projectName: string
};

interface IHalfTextInput {
  inputName: string,
  labelText: string,
  placeholder: string,
  value: string,
  onChangeText: (text: string) => void
};

export {
  ISwitch,
  IHeader,
  IMenu,
  ITitle,
  ISkillCard,
  IProjectCard,
  IHalfTextInput
};