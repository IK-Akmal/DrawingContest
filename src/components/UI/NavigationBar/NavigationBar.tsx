import { PropsWithChildren } from 'react';
import styles from './NavigationBar.module.scss';

function NavigationBar({ children }: PropsWithChildren) {
  return (
    <nav className={styles.nav}>
      {children}
    </nav>
  );
}

export default NavigationBar;
