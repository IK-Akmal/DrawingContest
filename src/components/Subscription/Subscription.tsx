import Button from '../UI/Button/Button';
import CheckBox from '../UI/Checkbox/CheckBox';
import Input from '../UI/Input/Input';
import Link from '../UI/Link/Link';
import Paragraph from '../UI/Paragraph/Paragraph';
import Title from '../UI/Title/Title';
import styles from './Subscription.module.scss';
import Strong from '../UI/Strong/Strong';

function Subscription() {
  return (
    <section className={styles.subscription}>
      <Title className={styles.title} variant="h2">Подпишись на нашу рассылку</Title>
      <Paragraph className={styles.subtitle} type="second">Обещаем присылать только самое важное и интересное :)</Paragraph>
      <form action="">
        <div className={styles.row}>
          <Input type="email" placeholder="Email" />
          <Button type="primary">Отправить</Button>
        </div>
        <CheckBox>
          <span className={styles.privacyPolicy}>
            Отправляя данные я соглашаюсь с
            {' '}
            <Strong>
              <Link variant="second" href="/#">
                Условиями конкурса
              </Link>
            </Strong>
            {' '}
            и
            {' '}
            <Strong>
              <Link variant="second" href="/#">
                Политикой обработки данных
              </Link>
            </Strong>
          </span>
        </CheckBox>
      </form>
    </section>
  );
}

export default Subscription;
