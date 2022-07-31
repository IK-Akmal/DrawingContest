import { useEffect, useRef } from 'react';
import { ReactComponent as PalettetIcon } from '../Icon/palette.svg';
import { SVGProps } from './SVG.props';

function Palette({ className, timeLine }: SVGProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    timeLine.to(
      svgRef.current,
      {
        rotate: 360, duration: 7, delay: 3, repeat: -1, ease: 'power1.inOut',
      },
      '<',
    );
  }, []);

  return (
    <PalettetIcon className={className} ref={svgRef} />
  );
}

export default Palette;
