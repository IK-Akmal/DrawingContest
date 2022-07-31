/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import { ReactNode } from 'react';
import styles from './ClockFace.module.scss';

type ClockFaceProps = {
  text: string;
  clasName?: string;
  label?: ReactNode;
};

function ClockFace({ text, clasName, label }: ClockFaceProps) {
  return (
    <div className={classNames(clasName, styles.wrapper)}>
      <div>
        <span className={styles.text}>{text}</span>
      </div>
      <div>
        {label}
      </div>
    </div>
  );
}

export default ClockFace;
