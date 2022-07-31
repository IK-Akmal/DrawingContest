import Paragraph from '../UI/Paragraph/Paragraph';
import Strong from '../UI/Strong/Strong';
import styles from './Description.module.scss';

function Description() {
  return (
    <section className={styles.wrapper}>
      <Paragraph className={styles.description} type="primary">
        Компания
        {' '}
        <b>СлонУм</b>
        {' '}
        – проводит конкурс для детей в котором могут
        участвовать ребята
        {' '}
        <Strong>всех возрастов!</Strong>
        {' '}
        Номинации в которых можно
        победить, есть возможность проявить себя во всех направлениях
        и даже
        {' '}
        <Strong>без художественных способностей.</Strong>
      </Paragraph>
    </section>
  );
}

export default Description;
