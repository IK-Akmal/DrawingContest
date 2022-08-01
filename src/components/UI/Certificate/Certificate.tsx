import styles from './Certificate.module.scss';
import stamp from './img/stamp.png';
import { ReactComponent as Background } from './icon/background.svg';
import { ReactComponent as Landscape } from './icon/landscape.svg';

function Сertificate() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.certificate}>
        <div>
          <h3 className={styles.title}>Диплом</h3>
          <p className={styles.subtitle}>Награждается</p>
          <p className={styles.fullName}>Гасенко Алина</p>
          <h3 className={styles.place}>1 место</h3>
          <p className={styles.description}>
            во Всероссийском конкурсе детских рисунков
            {' '}
            <br />
            «Моё счастливое лето»
            {' '}
            <br />
            Возраст от 0 до 4 лет, г. Калуга
          </p>
        </div>
        <time className={styles.dateOfIssue} dateTime="2022.08.15">15.08.2022</time>
        <img className={styles.stamp} src={stamp} alt="stamp" />
        <p className={styles.logo}>
          Слон
          <span>УМ</span>
        </p>
      </div>
      <Background className={styles.background} />
      <Landscape className={styles.landscape} />
    </div>
  );
}

export default Сertificate;
