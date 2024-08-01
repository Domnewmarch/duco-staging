import React from 'react';
import Container from '../container';

import * as styles from './styles.module.scss';

const ClientGrid = ({ clients = [] }) => {
  return (
    <div className={styles.clientGrid}>
      <p className={styles.clientGridTitle}>Trusted by</p>
      <Container size="medium">
        <img className={styles.clientsMobile} src="/images/clients/clients-mobile-new.png" />
        <img className={styles.clientsDesktop} src="/images/clients/new-client-desktop.png" />
      </Container>
    </div>
  );
};

export default ClientGrid;
