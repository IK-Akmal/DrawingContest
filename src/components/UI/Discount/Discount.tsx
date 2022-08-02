import Paragraph from '../Paragraph/Paragraph';
import styles from './Discount.module.scss';
import vk from './img/vk.png';
import ok from './img/ok.png';

function Discount() {
  return (
    <div className={styles.discount}>

      <div className={styles.header}>
        <div className={styles.cap}>Скидка за репост</div>
      </div>
      <div className={styles.content}>
        <Paragraph type="gost">Стоимость участия:</Paragraph>
        <p className={styles.price}>
          149₽
          {' '}
          <sup>299₽</sup>
        </p>
        <Paragraph type="gost">При наличии репоста в соцсетях :)</Paragraph>
      </div>
      <div className={styles.footer}>
        <span>Получить скидку:</span>
        <div className={styles.iconWrapper}>
          <img src={vk} alt="vk icon" />
          <img src={ok} alt="ok icon" />
        </div>
      </div>
    </div>
  );
}

export default Discount;
