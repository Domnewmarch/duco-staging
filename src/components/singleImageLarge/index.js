import React from 'react';
import Container from '../container';

import * as styles from './styles.module.scss';

const SingleImageLarge = ({ image, note }) => {
  return (
    <div className={styles.singleImage}>
      <div className={styles.singleImageInner}>
        <img src={image} alt="" />
        {note && <p>{note}</p>}
      </div>
    </div>
  );
};

export default SingleImageLarge;
