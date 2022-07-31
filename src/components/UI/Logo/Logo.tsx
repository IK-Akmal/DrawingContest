import styles from './Logo.module.scss';
import { ReactComponent as LogoIcon } from './icon/Logo.svg';

function Logo() {
  return (
    <div className={styles.logo}>
      <LogoIcon />
      <p className={styles.text}>
        Слон
        <span>УМ</span>
      </p>
    </div>
  );
}

export default Logo;
