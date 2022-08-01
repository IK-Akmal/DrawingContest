import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { ReactComponent as DivisionIcon } from '../Icon/plus.svg';
import { SVGProps } from './SVG.props';

function Plus({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timeLineClock = gsap.timeline({ repeat: -1, delay: 6, repeatDelay: 6 });

    timeLineClock
      .fromTo(
        svgRef.current,
        { scale: 0 },
        {
          scale: 1, duration: 3, ease: 'power1.out',
        },
      )
      .to(svgRef.current, {
        scale: 1.2, opacity: 0, duration: 3, ease: 'power1.int',
      });

    timeLine.add(timeLineClock, 1);
  }, []);

  return (
    <DivisionIcon className={className} ref={svgRef} />
  );
}

export default Plus;
