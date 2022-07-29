import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import styles from './Title.module.scss';
import TitleProps from './Title.props';

function Title({ variant = 'h1', className, children }: PropsWithChildren<TitleProps>) {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={classNames(className, styles.title, {
      [styles.h1]: variant === 'h1',
      [styles.h2]: variant === 'h2',
    })}
    >
      {children}

    </Tag>
  );
}

export default Title;
