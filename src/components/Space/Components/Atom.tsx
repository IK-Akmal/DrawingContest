import { useEffect, useRef } from 'react';
import { ReactComponent as AtomIcon } from '../Icon/atom.svg';
import { SVGProps } from './SVG.props';

function Atom({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.fromTo(
      svgRef.current,
      { scale: 0 },
      {
        duration: 6, rotate: 45, scale: 1, ease: 'power1.Out', yoyo: true, repeat: -1,
      },
      '<',
    );
  }, []);

  return (
    <AtomIcon className={className} ref={svgRef} />
  );
}

export default Atom;
