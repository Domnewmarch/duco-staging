import { Link } from "gatsby";
import React, { useState } from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

import ForThePlanet from "../../svgs/for-the-planet.svg";
import Instgram from "../../svgs/instagram.svg";
import Leaf from "../../svgs/leaf.svg";
import Linkedin from "../../svgs/linkedin.svg";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Container>
        <p>
          General contact: <a href="mailto:info@theduco.com?subject=Duco - Website Enquiry">info@theduco.com</a>
          <br />
          New business: <a href="mailto:jack@theduco.com?subject=Duco - Website Enquiry">jack@theduco.com</a>
          <br />
          Social: <a href="">@ducodesign</a>
          <br />
        </p>
        <p>
          Jack Maden-Wilkinson
          <br />
          CEO, Founder
          <br />
          <a href="mailto:jack@theduco.com?subject=Duco - Website Enquiry">jack@theduco.com</a>
        </p>
        <p>
          <a className={styles.tel} href="tel:+460707585281">
            +46 (0) 707 585 281
          </a>
        </p>
        <p>
          Studio:
          <br />
          Nääs Fabriker
          <br />
          Spinnerivägen 1
          <br />
          448 51 Tollered
          <br />
          Sweden
          <br />
          <a target="_blank" href="https://goo.gl/maps/82zZhXwemhyWPB1Q9">
            (view map)
          </a>
        </p>
        <p>
          For work opportunites, internships <br />
          and press use general contact.
        </p>
        <div className={styles.contactSocials}>
          <a target="_blank" className={styles.planetLink} href="/">
            <ForThePlanet />
          </a>
          <ul>
            <li>
              <a target="_blank" href="https://www.instagram.com/ducodesign">
                <Instgram />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/company/ducodesign/">
                <Linkedin />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://treesforlife.org.uk/groves/76689/">
                <Leaf />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
