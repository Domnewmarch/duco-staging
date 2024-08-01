import { Link } from 'gatsby';
import React, { useState } from 'react';
import Container from '../container';

import * as styles from './styles.module.scss';

import Logo from '../../svgs/main-logo-black.svg';

const Header = ({ isContact = false }) => {
  const [hambOpen, setHambOpen] = useState(false);
  const toggleHamb = () => setHambOpen(!hambOpen);

  return (
    <div className={`${styles.header} ${isContact && styles.dark}`}>
      <div className={styles.headerInner}>
        <Link to="/">
          <Logo />
        </Link>
        <div onClick={e => toggleHamb(e)} className={`${styles.headerHamb} ${hambOpen && styles.headerHambOpen}`}>
          <div className={styles.headerHambLine} />
          <div className={styles.headerHambLine} />
        </div>
        <div className={`${styles.hamburgerMenu} ${hambOpen && styles.hamburgerMenuOpen}`}>
          <Link to="/business-for-good">Business For Good</Link>
          <Link to="/creative">Creative</Link>
          <Link to="/our-story">Our Story</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
