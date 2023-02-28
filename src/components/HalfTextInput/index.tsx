import {
  Input,
  InputContainer
} from './styles';

import {
  IHalfTextInput
} from '../../@types';

const HalfTextInput: React.FC<IHalfTextInput> = ({
  inputName,
  labelText,
  placeholder,
  onChangeText,
  value
}) => {
  return (
    <InputContainer>
      <label
        htmlFor={inputName}
      >
        {labelText}
      </label>
      <Input
        name={inputName}
        type='text'
        placeholder={placeholder}
        onChange={e => onChangeText(e.target.value)}
        value={value}
      />
    </InputContainer>
  );
};

export default HalfTextInput;