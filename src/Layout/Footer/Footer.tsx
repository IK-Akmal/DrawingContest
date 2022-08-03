import Container from '../../components/UI/Container/Container';
import Paragraph from '../../components/UI/Paragraph/Paragraph';
import styles from './Footer.module.scss';
import telegram from './img/telegram.png';
import zen from './img/zen.png';
import vk from './img/vk.png';
import Link from '../../components/UI/Link/Link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <div className={styles.ourSocialNetworks}>
            <Paragraph type="gost">Наши соцсети:</Paragraph>
            <Link href="/#">
              <img src={telegram} alt="logo telegram" />
            </Link>
            <Link href="/#">
              <img src={zen} alt="logo zen" />
            </Link>
            <Link href="/#">
              <img src={vk} alt="logo vk" />
            </Link>
          </div>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/#">Главная</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/#">Личный кабинет</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/#">Контакты</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/#">Конфиденциальность</Link>
            </li>
          </ul>
          <div className={styles.ourSocialNetworks}>
            <Paragraph type="gost">Наши соцсети:</Paragraph>
            <div className={styles.btn} />
          </div>
        </div>
        <Paragraph className={styles.copyright} type="gost">&copy; Все права защищены.  ООО”Слонум” 2022</Paragraph>
      </Container>
    </footer>
  );
}

export default Footer;
