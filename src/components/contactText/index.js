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
              <a href="https://goo.gl/maps/directions" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style={{ marginRight: '5px', transform: 'rotate(-45deg)' }}>
                  <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-7-7a.5.5 0 1 0-.708.708L14.293 8 8.146 14.146a.5.5 0 0 0 .708.708l7-7z" />
                  <path fillRule="evenodd" d="M0 8a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 0-1H.5a.5.5 0 0 0-.5.5z" />
                </svg>
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
