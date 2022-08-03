/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
import classNames from 'classnames';
import { useReducer } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import styles from './Accordion.module.scss';
import AccordionProps from './Accordion.props';

import { ReactComponent as PlusIcon } from './icon/plus.svg';

function Accordion({ text, title }: AccordionProps) {
  const [open, setOpen] = useReducer((value) => !value, false);

  return (
    <div className={styles.accordion}>
      <div className={styles.header}>
        <h4 className={styles.title}>{title}</h4>
        <div className={styles.toggle} onClick={setOpen} role="button">
          <PlusIcon className={classNames(styles.icon, {
            [styles.close]: open,
          })}
          />
        </div>
      </div>
      <Paragraph
        type="second"
        className={classNames(styles.content, {
          [styles.show]: open,
        })}
      >
        {text}

      </Paragraph>
    </div>
  );
}

export default Accordion;
