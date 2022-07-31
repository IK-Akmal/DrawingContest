import { PropsWithChildren } from 'react';
import styles from './Em.module.scss';

function Em({ children }: PropsWithChildren) {
  return (
    <em className={styles.em}>
      {children}
    </em>
  );
}

export default Em;
