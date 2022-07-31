import { PropsWithChildren } from 'react';
import styles from './Card.module.scss';

type CardProps = {
  img: string;
};

function Card({ img, children }: PropsWithChildren<CardProps>) {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={img} alt="icon" />
      <p className={styles.text}>{children}</p>
    </div>
  );
}

export default Card;
