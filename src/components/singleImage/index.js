import React from 'react';
import Container from '../container';

import * as styles from './styles.module.scss';

const SingleImage = ({ image, note }) => {
  return (
    <div className={styles.singleImage}>
      <Container size="medium">
        <div className={styles.singleImageInner}>
          <img src={image} alt="" />
          {note && <p>{note}</p>}
        </div>
      </Container>
    </div>
  );
};

export default SingleImage;
