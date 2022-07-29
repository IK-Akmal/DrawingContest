import classNames from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import ButtonProps from './Button.props';
import styles from './Button.module.scss';

function Button({
  children, className, type, htmlType = 'button', ...props
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) {
  return (
    <button
      className={classNames(className, styles.btn, {
        [styles.primary]: type === 'primary',
        [styles.second]: type === 'second',
      })}
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={htmlType}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  );
}

export default forwardRef(Button);
