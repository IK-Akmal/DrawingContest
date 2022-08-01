import gsap from 'gsap';
import {
  PropsWithChildren, useEffect, useMemo, useRef,
} from 'react';
import classNames from 'classnames';
import styles from './Plan.module.scss';

type PlanProps = {
  step: number;
  // eslint-disable-next-line react/require-default-props
  className?: string;
  isShow: boolean;
};

function Plan({
  step, className, isShow, children,
}: PropsWithChildren<PlanProps>) {
  const ref = useRef<HTMLParagraphElement>(null);

  const timeLine = useMemo(() => gsap.timeline({ paused: true, defaults: { duration: 2 } }), []);

  useEffect(() => {
    timeLine.fromTo(
      ref.current,
      {
        x: 10,
        opacity: 0,
      },
      {
        x: 0,
        ease: 'power2.out',
        opacity: 1,
      },
    );
  }, []);

  useEffect(() => {
    if (isShow) {
      timeLine.play();
    }
  }, [isShow]);

  return (
    <div className={classNames(className, styles.plan)}>
      <div className={styles.circle}>
        {step}
      </div>
      <p ref={ref}>{children}</p>
    </div>
  );
}

export default Plan;
