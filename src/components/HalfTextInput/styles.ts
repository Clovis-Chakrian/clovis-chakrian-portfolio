import styled from "styled-components";


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 46.5vw;
  height: 52px;
  background-color: ${props => props.theme.colors.inputBackgroundColor};
  border-radius: 5px;
  padding: 0px 6px;
  font-size: 14px;
  border: none;
  border-bottom: 0.5px solid ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.inputTextColor};

  ::placeholder {
    color: ${props => props.theme.colors.inputPlaceholderColor};
  };

  :-ms-input-placeholder{
    color: ${props => props.theme.colors.inputPlaceholderColor}
  };

  :focus-visible {
    outline: none;
  };

  :focus {
    border: none;
    border-bottom: 0.5px solid ${props => props.theme.colors.alternativeHighContrastText};
  };

  @media screen and (min-width: 1100px) {
    width: 23vw;
  }
`;