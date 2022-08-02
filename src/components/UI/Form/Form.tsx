import AirPlanes from '../AirPlanes/AirPlanes';
import Button from '../Button/Button';
import CheckBox from '../Checkbox/CheckBox';
import Input from '../Input/Input';
import Link from '../Link/Link';
import Strong from '../Strong/Strong';
import styles from './Form.module.scss';

function Form() {
  return (
    <form className={styles.form}>
      <div className={styles.inputWrapper}>
        <Input placeholder="ФИО ребёнка" />
        <Input placeholder="Дата рождения" />
        <Input placeholder="Город" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Пароль" type="password" />
      </div>
      <CheckBox className={styles.checkbox}>
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
      <div className={styles.row}>
        <Button type="danger" htmlType="submit">Участвовать</Button>
        <AirPlanes />
      </div>
    </form>
  );
}

export default Form;
