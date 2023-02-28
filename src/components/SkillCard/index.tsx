import {
  SkillCardContainer,
  SkillCardLabel
} from './styles';

import {
  ISkillCard
} from '../../@types';


const SkillCard: React.FC<ISkillCard> = ({
  skill,
  SkillIcon
}) => {
  return (
    <SkillCardContainer>
      <SkillIcon />
      <SkillCardLabel>{skill}</SkillCardLabel>
    </SkillCardContainer>
  );
};

export default SkillCard;