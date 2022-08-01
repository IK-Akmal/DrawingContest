import classNames from 'classnames';
import LinkProps from './Link.props';

import styles from './Link.module.scss';

function Link({ className, children, ...props }: LinkProps) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <a className={classNames(className, styles.link)} {...props}>{children}</a>
  );
}

export default Link;
