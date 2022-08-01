/* eslint-disable @typescript-eslint/no-unused-vars */
import Container from '../UI/Container/Container';
import Em from '../UI/Em/Em';
import Title from '../UI/Title/Title';
import Card from '../UI/Card/Card';

import styles from './Advantage.module.scss';

import StarIcon from './img/star.png';
import WinnerIcon from './img/winne.png';
import CertificationIcon from './img/certification.png';
import GiftIcon from './img/gift.png';
import EmailIcon from './img/email.png';
import VKIcon from './img/vk.png';
import Link from '../UI/Link/Link';

function Advantage() {
  return (
    <section className={styles.advantage}>
      <Container>
        <Title variant="h2">
          Для чего
          {' '}
          <Em>нужно</Em>
          {' '}
          участвовать
        </Title>
        <div className={styles.cardWrapper}>
          <Card img={StarIcon}>Шанс занять 1 место — в вашем городе и по всей России</Card>
          <Card img={WinnerIcon}>
            Развитие самостоятельности + свободное время для родителей ;)
          </Card>
          <Card img={CertificationIcon}>
            Персональный диплом в разных номинациях каждому участнику
          </Card>
          <Card img={GiftIcon}>
            Призы и скидки для подписчиков и авторизованных пользователей
          </Card>
          <Card img={EmailIcon}>
            Бесплатный диплом на email — через 1 день после конкурса
          </Card>
          <Card img={VKIcon}>
            Публикация работ победителей во ВКонтакте.
            {' '}
            <Link href="/#">Подписывайтесь!</Link>
          </Card>
        </div>
      </Container>
    </section>
  );
}

export default Advantage;
