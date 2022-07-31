import { useEffect, useRef } from 'react';
import { ReactComponent as RocketIcon } from '../Icon/rocket.svg';
import { SVGProps } from './SVG.props';

function Rocket({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.to(
      svgRef.current,
      {
        y: 70, duration: 8, yoyo: true, repeat: -1, ease: 'power1.inOut',
      },
      '<',
    );
  }, []);

  return (
    <RocketIcon className={className} ref={svgRef} />
  );
}

export default Rocket;
