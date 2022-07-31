import { PropsWithChildren } from 'react';
import styles from './WrapperSpace.module.scss';

function WrapperSpace({ children }: PropsWithChildren) {
  return (
    <div className={styles.wrapperSpace}>
      {children}
    </div>
  );
}

export default WrapperSpace;
