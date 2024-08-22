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
          <p>
            We’re an agile, independent,
            <br /> multidisciplinary creative consultancy,
            <br /> partnering with leading global brands <br />
            and disruptive start-ups.
          </p>
          <p>
            With over 10 years in-house experience
            <br /> and 5 years as independent visionaries,
            <br /> we question, fuse and play to help our
            <br /> partners lead now and in the future.
          </p>
        </div>
        <div className={styles.row}>
          <h2>What we do</h2>
          <p>
            We create breakthrough concepts,
            <br /> brands, products and experiences that
            <br /> help businesses grow.
          </p>
          <p>
            Transforming organizations to new <br />
            possibilities.
          </p>
        </div>
        <div className={styles.row}>
          <h2>Business for good</h2>
          <p>It’s our future to create.</p>
          <p>
            As a 1% for the Planet member, we actively
            <br /> use our position to create a positive impact
            <br /> for businesses, people and the planet.
          </p>
          <p>
            To date, we have planted over 2,000 trees
            <br /> in the U.K. and are now scaling our vision
            <br /> internationally by planting one tree daily.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ThreeRowContent;
