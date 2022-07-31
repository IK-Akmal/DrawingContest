import ClockFace from './ClockFace/ClockFace';
import styles from './Timer.module.scss';

function Timer() {
  return (
    <div className={styles.wrapper}>
      <ClockFace text="01" label="дней" />
      <span className={styles.divider}>:</span>
      <ClockFace text="09" label="часов" />
      <span className={styles.divider}>:</span>
      <ClockFace text="43" label="минут" />
    </div>
  );
}

export default Timer;
