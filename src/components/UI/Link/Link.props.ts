import { AnchorHTMLAttributes, DetailedHTMLProps } from 'react';

interface LinkProps
  extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant?: 'default' | 'second'
}

export default LinkProps;
