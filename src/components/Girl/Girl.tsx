import gsap from 'gsap';
import { useEffect, useMemo, useRef } from 'react';
import styles from './Girl.module.scss';
import { ReactComponent as GirlIcon } from './icon/girl.svg';
import { ReactComponent as PanelIcon } from './icon/panel.svg';

function Girl() {
  const ref = useRef<SVGSVGElement>(null);

  const timeLine = useMemo(() => gsap.timeline({ paused: true }), []);

  useEffect(() => {
    timeLine
      .to(ref.current, { rotate: 24, onComplete: () => { timeLine.pause(); }, ease: 'power1.inOut' })
      .to(ref.current, { rotate: 66, onComplete: () => { timeLine.pause(); }, ease: 'power1.inOut' })
      .to(
        ref.current,
        {
          rotate: 72,
          onComplete: () => {
            timeLine
              .to(
                ref.current,
                { rotate: 0, onComplete: () => { timeLine.restart().pause(); } },
              );
          },
        },
      );
  }, [timeLine]);

  const handleClick = () => {
    timeLine.play();
  };

  return (
    <>
      <GirlIcon onClick={handleClick} className={styles.girl} />
      <PanelIcon ref={ref} className={styles.panel} />
    </>
  );
}

export default Girl;
