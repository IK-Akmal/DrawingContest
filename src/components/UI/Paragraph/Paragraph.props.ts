import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ParagraphProps extends
  DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  type: 'primary' | 'second' | 'gost'
}

export default ParagraphProps;
