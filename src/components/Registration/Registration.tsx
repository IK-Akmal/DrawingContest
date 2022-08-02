import Container from '../UI/Container/Container';
import Discount from '../UI/Discount/Discount';
import Form from '../UI/Form/Form';
import Title from '../UI/Title/Title';
import styles from './Registration.module.scss';

function Registration() {
  return (
    <section className={styles.registration}>
      <Container>
        <Title variant="h2" className={styles.title}>Зарегистрируйтесь, чтобы участвовать</Title>
        <div className={styles.row}>
          <Discount />
          <Form />
        </div>
      </Container>
    </section>
  );
}

export default Registration;
