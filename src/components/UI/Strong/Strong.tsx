import { PropsWithChildren } from 'react';
import styles from './Strong.module.scss';

function Strong({ children }: PropsWithChildren) {
  return (
    <strong className={styles.strong}>{children}</strong>
  );
}

export default Strong;
