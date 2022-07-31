import { useEffect, useRef } from 'react';
import { ReactComponent as MontgolfierIcon } from '../Icon/montgolfier.svg';
import { SVGProps } from './SVG.props';

function Montgolfier({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.to(svgRef.current, {
      y: 34, duration: 6, yoyo: true, repeat: -1, ease: 'power1.inOut',
    }, '<');
  }, []);

  return (
    <MontgolfierIcon className={className} ref={svgRef} />
  );
}

export default Montgolfier;
