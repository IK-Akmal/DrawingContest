import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface CheckboxProps extends
  Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'type'> {
}

export default CheckboxProps;
