// File: components/ThreeRowContent.js

import React from 'react';
import Container from '../container';
import * as styles from './styles.module.scss';

const ThreeRowContent = () => {
  return (
    <Container size="medium">
      <div className={styles.threeRowContent}>
        <div className={styles.row}>
          <h2>Who we are</h2>
          <p>We’re an agile, independent, multidisciplinary creative consultancy, partnering with leading global brands and disruptive start-ups.</p>
          <p>With over 10 years in-house experience and 5 years as independent visionaries, we question, fuse and play to help our partners lead now and in the future.</p>
        </div>
        <div className={styles.row}>
          <h2>What we do</h2>
          <p>We create breakthrough concepts, brands, products and experiences that help businesses grow.</p>
          <p>Transforming organizations to new possibilities.</p>
        </div>
        <div className={styles.row}>
          <h2>Business for good</h2>
          <p>It’s our future to create.</p>
          <p>As a 1% for the Planet member, we actively use our position to create a positive impact for businesses, people, and the planet.</p>
          <p>To date, we have planted over 2,000 trees in the U.K. and are now scaling our vision internationally by planting one tree daily.</p>
        </div>
      </div>
    </Container>
  );
};

export default ThreeRowContent;
