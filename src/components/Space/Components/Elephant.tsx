import { useEffect, useRef } from 'react';
import { ReactComponent as ElephantIcon } from '../Icon/elephant.svg';
import { SVGProps } from './SVG.props';

function Elephant({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.to(svgRef.current, {
      x: 10, rotate: 41, duration: 6, yoyo: true, repeat: -1, ease: 'power1.inOut',
    }, '<');
  }, []);

  return (
    <ElephantIcon className={className} ref={svgRef} />
  );
}

export default Elephant;
