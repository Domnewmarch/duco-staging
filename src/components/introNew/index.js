import React from 'react';
import Container from '../container';
import * as styles from './styles.module.scss';

const IntroNew = ({ content, marginTop = false, titleCentre = false }) => {
  return (
    <Container>
      <div>
        <h1>About</h1>
        <p>We are Duco</p>
        <p>(Pronounced Du-Co)</p>
      </div>
    </Container>
  );
};

export default IntroNew;
