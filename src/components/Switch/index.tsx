import { ISwitch } from '../../@types';

import {
  SwitchContainer,
  SwitchCircle
} from './styles';

const Switch: React.FC<ISwitch> = ({
  onChange
}) => {
  return (
    <SwitchContainer onClick={onChange}>
      <SwitchCircle
      />
    </SwitchContainer>
  );
}

export default Switch;