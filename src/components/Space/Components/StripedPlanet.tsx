import { useEffect, useRef } from 'react';
import { ReactComponent as AirplaneIcon } from '../Icon/striped-planet.svg';
import { SVGProps } from './SVG.props';

function StripedPlanet({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.to(svgRef.current, {
      x: 30, duration: 6, delay: 0.8, ease: 'power1.inOut', yoyo: true, repeat: -1,
    }, '<');
  }, []);

  return (
    <AirplaneIcon className={className} ref={svgRef} />
  );
}

export default StripedPlanet;
