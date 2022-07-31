import Button from '../UI/Button/Button';
import Paragraph from '../UI/Paragraph/Paragraph';
import Timer from '../UI/Timer/Timer';
import Title from '../UI/Title/Title';
import styles from './Intro.module.scss';

function Intro() {
  return (
    <div className={styles.wrapper}>
      <span>От компании СлонУМ</span>
      <Title className={styles.title} variant="h1"> Всероссийский конкурс Детского рисунка</Title>
      <Paragraph className={styles.paragraph} type="second">
        Участвуйте в конкурсе и получайте призы в различных
        номинациях детского рисунка для всех возрастов
      </Paragraph>
      <div className={styles.row}>
        <Button type="primary">Участвовать</Button>
        <Timer />
      </div>
    </div>
  );
}

export default Intro;
