import React from 'react';
import Footer from '../footer';
import Header from '../header';
import Preloader from '../preloader';

import '../../sass/base.scss';

import * as styles from './styles.module.scss';

const Layout = ({ children, isContact = false }) => {
  return (
    <div className={`${styles.layout} ${isContact && styles.dark}`}>
      <Preloader />
      <Header isContact={isContact} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
