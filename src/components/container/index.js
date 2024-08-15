import React from 'react';

import * as styles from './styles.module.scss';

const Container = ({ children, size = 'medium', padding }) => {
  return <div className={`${styles.container} ${styles[size]} ${padding === 'no-padd' && styles.noPadd}`}>{children}</div>;
};

export default Container;
