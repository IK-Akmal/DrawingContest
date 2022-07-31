import { useEffect, useRef } from 'react';
import { ReactComponent as BigPlanetIcon } from '../Icon/big-planet.svg';
import { SVGProps } from './SVG.props';

function BigPlanet({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.to(svgRef.current, {
      duration: 6, x: -50, y: 20, yoyo: true, repeat: -1, ease: 'power1.inOut',
    }, '<');
  }, []);

  return (
    <BigPlanetIcon className={className} ref={svgRef} />
  );
}

export default BigPlanet;
