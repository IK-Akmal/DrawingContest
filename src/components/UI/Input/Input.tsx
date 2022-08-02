import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.scss';
import InputProps from './Input.props';

function Input({ className, type = 'text', ...props }: InputProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <input ref={ref} className={classNames(styles.input, className)} type={type} {...props} />
  );
}

export default forwardRef<HTMLInputElement, InputProps>(Input);
