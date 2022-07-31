import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Container.module.scss';
import ContainerProps from './Container.props';

function Container({ children, className, ...props }: PropsWithChildren<ContainerProps>) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames(className, styles.container)} {...props}>{children}</div>
  );
}

export default Container;
