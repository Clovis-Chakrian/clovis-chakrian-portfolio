import styled from "styled-components";

export const TitleContainer = styled.div`
  padding: 10px;
  padding-bottom: 0px;
`

export const Title = styled.h3`
  font-size: 18px;
  color: ${props => props.theme.colors.text};
  
  @media screen and (min-width: 600px) {
    font-size: 24px;
  }
`;

export const TitleBlur = styled(Title)`
  filter: blur(4px);
  position: relative;
  bottom: 20px;
`;