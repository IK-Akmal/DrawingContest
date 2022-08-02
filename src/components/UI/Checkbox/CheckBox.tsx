/* eslint-disable react/jsx-props-no-spreading */
import { ForwardedRef, forwardRef } from 'react';
import classNames from 'classnames';
import CheckboxProps from './Checkbox.props';
import styles from './CheckBox.module.scss';

function CheckBox({ className, children, ...props }:
CheckboxProps, ref: ForwardedRef<HTMLInputElement>) {
  return (
    <label className={classNames(className, styles.container)}>
      <input type="checkbox" ref={ref} {...props} />
      <span className={styles.checkmark} />
      <div className={styles.label}>{children}</div>
    </label>
  );
}

export default forwardRef<HTMLInputElement, CheckboxProps>(CheckBox);
