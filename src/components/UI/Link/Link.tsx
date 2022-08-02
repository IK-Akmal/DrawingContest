import classNames from 'classnames';
import LinkProps from './Link.props';

import styles from './Link.module.scss';

function Link({
  className, variant = 'default', children, ...props
}: LinkProps) {
  return (
    <a
      className={classNames(className, styles.link, {
        [styles.default]: variant === 'default',
        [styles.second]: variant === 'second',
      })}
    // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}

    </a>
  );
}

export default Link;
