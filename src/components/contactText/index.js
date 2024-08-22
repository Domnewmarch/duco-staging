import React from 'react';
import Container from '../container';
import * as styles from './styles.module.scss';

const ContactText = () => {
  return (
    <Container size="medium">
      <div className={styles.contactText}>
        <div className={styles.row}>
          <div>
            <p>
              <a href="mailto:hello@theduco.com">hello@theduco.com</a>
            </p>
            <p>+46 (0) 707 585 281</p>
            <br />
            <p>Jack Maden-Wilkinson</p>
            <p>CCO/Director</p>
            <p>
              <a href="mailto:jack@theduco.com">jack@theduco.com</a>
            </p>
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <p>Nääs Fabriker</p>
            <p>Spinnerivägen 1</p>
            <p>44851 Tollered</p>
            <p>Sweden</p>
            <p>
              <a className={styles.directions} href="https://goo.gl/maps/directions" target="_blank">
                Directions
              </a>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactText;
