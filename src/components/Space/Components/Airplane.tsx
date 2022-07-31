import { useEffect, useRef } from 'react';
import { ReactComponent as AirplaneIcon } from '../Icon/airplane.svg';
import { SVGProps } from './SVG.props';

function Airplane({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.fromTo(
      svgRef.current,
      { scale: 0.5 },
      {
        duration: 6, rotate: 45, scale: 1, ease: 'power1.inOut', yoyo: true, repeat: -1,
      },
      '<',
    );
  }, []);

  return (
    <AirplaneIcon className={className} ref={svgRef} />
  );
}

export default Airplane;
