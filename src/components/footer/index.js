import { Link } from 'gatsby';
import React from 'react';
import Container from '../container';

import * as styles from './styles.module.scss';

import ForThePlanet from '../../svgs/for-the-planet.svg';
import Instagram from '../../svgs/instagram.svg';
import Trees from '../../svgs/leaf.svg';
import Linkedin from '../../svgs/linkedin.svg';
import Logo from '../../svgs/main-logo-black.svg';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLeft}>
          <p>
            <Link className={styles.contactLink} to="/contact">
              Contact us
            </Link>
            <span className={styles.footerCopyIcon}>&copy;</span>
            <span className={styles.footerCopyText}>2019-2024 Duco</span>
            <a target="_blank" className={styles.planetLink} href="/">
              <ForThePlanet />
            </a>
          </p>
        </div>
        <div className={styles.footerRight}>
          <ul>
            <li>
              <a target="_blank" href="https://www.instagram.com/ducodesign">
                <Instagram />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/company/ducodesign/">
                <Linkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
