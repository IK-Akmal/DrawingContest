import classNames from 'classnames';
import ParagraphProps from './Paragraph.props';
import styles from './Paragraph.module.scss';

function Paragraph({
  className, type, children, ...props
}: ParagraphProps) {
  return (
    <p
      className={classNames(className, styles.paragraph, {
        [styles.primary]: type === 'primary',
        [styles.second]: type === 'second',
      })}
            // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </p>
  );
}

export default Paragraph;
