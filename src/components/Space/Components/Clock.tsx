import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ReactComponent as ClockIcon } from '../Icon/clock.svg';
import { SVGProps } from './SVG.props';

function Clock({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timeLineClock = gsap.timeline({ repeat: -1 });

    timeLineClock
      .fromTo(
        svgRef.current,
        { rotation: 0, scale: 0.7 },
        {
          scale: 1, rotation: 180, duration: 6, ease: 'power1.in',
        },
      )
      .to(svgRef.current, {
        scale: 0.7, rotation: 360, duration: 6, ease: 'power1.out',
      });

    timeLine.add(timeLineClock, '<');
  }, []);

  return (
    <ClockIcon className={className} ref={svgRef} />
  );
}

export default Clock;
