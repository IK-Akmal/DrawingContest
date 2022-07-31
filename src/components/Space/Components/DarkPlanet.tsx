import { useEffect, useRef } from 'react';
import { ReactComponent as DarkPlanetIcon } from '../Icon/dark-planet.svg';
import { SVGProps } from './SVG.props';

function DarkPlanet({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.to(
      svgRef.current,
      {
        duration: 6, rotate: -45, ease: 'power1.inOut', yoyo: true, repeat: -1,
      },
      '<',
    );
  }, []);

  return (
    <DarkPlanetIcon className={className} ref={svgRef} />
  );
}

export default DarkPlanet;
