import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ReactComponent as LampIcon } from '../Icon/lamp.svg';
import { SVGProps } from './SVG.props';

function Lamp({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timeLineLamp = gsap.timeline({
      delay: 1.3, ease: 'power1.inOut', repeat: -1,
    });

    timeLineLamp
      .to(svgRef.current, { duration: 4.80, rotate: -40 })
      .to(svgRef.current, { duration: 3.5, rotate: 5 })
      .to(svgRef.current, { duration: 2, rotate: 25 })
      .to(svgRef.current, { duration: 1.7, rotate: 0 });

    timeLine.add(timeLineLamp, '<');
  }, []);

  return (
    <LampIcon className={className} ref={svgRef} />
  );
}

export default Lamp;
