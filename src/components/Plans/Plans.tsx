import gsap from 'gsap';
import {
  useEffect, useRef, useState,
} from 'react';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

import styles from './Plans.module.scss';

import Container from '../UI/Container/Container';
import Em from '../UI/Em/Em';
import Title from '../UI/Title/Title';
import Plan from '../UI/Plan/Plan';
import Link from '../UI/Link/Link';

import { ReactComponent as PlaneIcon } from './icon/plane.svg';
import { ReactComponent as DottedLineIcon } from './icon/dotted-line.svg';

function Plans() {
  const pathRef = useRef<SVGSVGElement>(null);
  const planeRef = useRef<SVGSVGElement>(null);

  const plansRef = useRef<HTMLDivElement>(null);

  const [plan1, setPlane1] = useState<boolean>(false);
  const [plan2, setPlane2] = useState<boolean>(false);
  const [plan3, setPlane3] = useState<boolean>(false);

  const timeLine = useRef(gsap.timeline({ paused: true }));

  const observerPlans = useRef(new IntersectionObserver((entries, observer) => {
    if (entries[0].isIntersecting) {
      timeLine.current.play();
      observer.unobserve(plansRef.current as Element);
    }
  }));

  gsap.registerPlugin(MotionPathPlugin);

  useEffect(() => {
    observerPlans.current.observe(plansRef.current as Element);
  });

  useEffect(() => {
    timeLine
      .current
      .set(planeRef.current, { rotateY: 190 })
      .to(planeRef.current, {
        duration: 4,
        ease: 'power1.inOut',
        motionPath: {
          path: '#path',
          align: '#path',
          alignOrigin: [0.5, 0.7],
          autoRotate: true,
        },
        onUpdate() {
          const { ratio } = this;
          if (ratio > 0.2 && !plan1) {
            setPlane1(true);
          }
          if (ratio > 0.4 && !plan2) {
            setPlane2(true);
          }
          if (ratio > 0.6 && !plan3) {
            setPlane3(true);
          }
        },
      });
  }, []);

  return (
    <section className={styles.plan}>
      <Container className={styles.container}>
        <Title variant="h2">
          Пошаговый
          {' '}
          <Em>план</Em>
        </Title>
        <div ref={plansRef} className={styles.wrapper}>
          <DottedLineIcon ref={pathRef} className={styles.dottedLine} />
          <PlaneIcon ref={planeRef} className={styles.plane} />
          <Plan isShow={plan1} className={styles.plan1} step={1}>
            Зарегистрируйтесь
            {' '}
            <br />
            {' '}
            на конкурс
            {' '}
            <Link className={styles.link} href="/#">Здесь</Link>
          </Plan>
          <Plan isShow={plan2} className={styles.plan2} step={2}>
            Выполните все
            {' '}
            <br />
            {' '}
            условия конкурса
          </Plan>
          <Plan isShow={plan3} className={styles.plan3} step={3}>
            Загрузите рисунок
            {' '}
            <Link className={styles.link} href="/#">Здесь</Link>
            <br />
            {' '}
            или в Личном кабинете
          </Plan>
        </div>
      </Container>
    </section>
  );
}

export default Plans;
