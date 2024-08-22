import React from 'react';
import Container from '../container';

import * as styles from './styles.module.scss';

const TextBlcok = ({ text }) => {
  return (
    <div className={styles.textBlock}>
      <Container size="large">
        <p>
          We're the ones behind the scenes,
          <br />
          The ones crafting the brands of tomorrow.
          <br />
          <br />
        </p>
        <p>
          We are duco.
          <br />
          the industry's best-kept secret.
          <br />
        </p>
      </Container>
    </div>
  );
};

export default TextBlcok;
