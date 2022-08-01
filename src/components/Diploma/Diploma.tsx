import Container from '../UI/Container/Container';
import Em from '../UI/Em/Em';
import Paragraph from '../UI/Paragraph/Paragraph';
import Title from '../UI/Title/Title';
import Certificate from '../UI/Certificate/Certificate';
import styles from './Diploma.module.scss';

function Diploma() {
  return (
    <section className={styles.diploma}>
      <Container className={styles.container}>
        <div>
          <Title variant="h2">
            Выдаём
            {' '}
            <Em>дипломы</Em>
            {' '}
            участникам
          </Title>
          <Paragraph type="second">
            Жюри конкурса рассмотрит работы и выделит победителей по
            городам и возрастным категориям,
            а также определит другие номинации, подчеркнув уникальную
            особенность каждого конкретного рисунка — дипломы получат все дети!
          </Paragraph>
          <Paragraph type="second">
            Скачать диплом можно будет в личном кабинете через
            сутки после окончания конкурса, дополнительно вышлем его на e-mail.
          </Paragraph>

          <Paragraph type="second">
            Со слоном к победам напролом!
          </Paragraph>
        </div>
        <Certificate />
      </Container>
    </section>
  );
}

export default Diploma;
