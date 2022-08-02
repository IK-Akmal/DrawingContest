import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import PlaneFirst from './PlaneFirst';
import PlaneSecond from './PlaneSecond';

import { ReactComponent as Plane } from './plane.svg';

function AirPlanes() {
  const planeFirstRef = useRef<SVGGElement>(null);
  const planeSecondRef = useRef<SVGGElement>(null);
  const planeRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const isFinished = useRef(false);

  gsap.registerPlugin(MotionPathPlugin);

  const timeLine = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    timeLine
      .current
      .set(planeRef.current, { rotateY: 180, rotateX: 180, opacity: 1 })
      .to(planeRef.current, {
        duration: 2,
        ease: 'power1.inOut',
        motionPath: {
          path: pathRef.current as SVGPathElement,
          align: pathRef.current as SVGPathElement,
          alignOrigin: [0.5, 0.8],
          autoRotate: true,
          end: 0.9,
        },
      })
      .to(planeRef.current, {
        direction: 0.3,
        delay: 0.1,
        x: -465,
        y: -2,
        rotate: -160,
        ease: 'power3.Out',
      })
      .to(planeFirstRef.current, {
        direction: 0.3,
        x: -10,
        y: -3,
        ease: 'power3.Out',
      }, '<')
      .to(planeSecondRef.current, {
        direction: 0.3,
        rotate: -5,
        x: -28,
        y: 10,
        ease: 'power3.Out',
      }, '<')
      .to(planeRef.current, {
        direction: 0.5,
        delay: 0.2,
        x: -463,
        y: 0,
        onComplete: () => {
          isFinished.current = true;
        },
      });
  }, []);

  const handleClick = () => {
    if (isFinished.current) {
      timeLine.current.restart();
    } else {
      timeLine.current.play();
      isFinished.current = false;
    }
  };

  return (
    <>
      <svg onClick={handleClick} style={{ cursor: 'pointer' }} height="90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <PlaneFirst ref={planeFirstRef} />
        <PlaneSecond ref={planeSecondRef} />
        <path visibility="hidden" ref={pathRef} opacity="0" d="M 615 -201 C 524 -39 402 74 135 51" fill="#000000" />
      </svg>
      <Plane onClick={handleClick} style={{ opacity: 0, cursor: 'pointer' }} ref={planeRef} />
    </>
  );
}

export default AirPlanes;
