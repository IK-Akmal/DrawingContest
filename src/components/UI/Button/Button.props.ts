import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

interface ButtonProps extends
  Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'type'> {
  type: 'primary' | 'second' | 'danger';
  htmlType?: 'submit' | 'reset' | 'button';
}

export default ButtonProps;
