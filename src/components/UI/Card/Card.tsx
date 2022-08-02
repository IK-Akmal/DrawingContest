import { PropsWithChildren } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import styles from './Card.module.scss';

type CardProps = {
  img: string;
};

function Card({ img, children }: PropsWithChildren<CardProps>) {
  return (
    <div className={styles.card}>
      <img className={styles.icon} src={img} alt="icon" />
      <Paragraph type="gost">{children}</Paragraph>
    </div>
  );
}

export default Card;
