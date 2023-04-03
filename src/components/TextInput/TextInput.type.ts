import { type ReactNode } from 'react';

export interface InputStyledInterface {
  isError?: boolean;
  isFocused?: boolean;
  isDisabled?: boolean;
  isHasPadding?: boolean;
}
export interface TextInputBaseInterface extends InputStyledInterface {
  value: string | number;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
  type?: string;
  placeholder?: string;
  dataTestId?: string;
  isError?: boolean;
  suffixComponent?: ReactNode;
  prefixText?: string;
  maxLength?: number;
}
