import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import { type TextInputBaseInterface } from './TextInput.type';

const InputStyled = styled.input`
  border: 1px solid #e7e1e1;
  color: ${({ disabled }) => (disabled ? '#A7A7A7' : '#4d4d4d')};
  flex: 1;
  font-size: 14px;
  min-width: 0px;
  outline: 0;
  text-overflow: ellipsis;
  padding: 12px 16px;
  border-radius: 5px;
  ::placeholder {
    color: ${({ disabled }) => (disabled ? '#A7A7A7' : '#A7A7A7')};
  }
`;

const TextInput = (props: TextInputBaseInterface) => {
  return (
    <InputStyled
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      onBlur={props.onBlur}
      onChange={props.onChange}
      required={props.isRequired}
    />
  );
};

TextInput.prototype = {
  placeholder: PropTypes.string,
  variant: PropTypes.string
};

TextInput.defaultProps = {
  placeholder: 'Placeholder',
  variant: 'box'
};

export default TextInput;
