import { ITitle } from '../../@types';
import {
  Title,
  TitleBlur,
  TitleContainer
} from './styles';

const SectionTitle: React.FC<ITitle> = ({
  title
}) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <TitleBlur>{title}</TitleBlur>
    </TitleContainer>
  );
};

export default SectionTitle;