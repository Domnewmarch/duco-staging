import React from "react";

import * as styles from "./styles.module.scss";

import Logo from "../../svgs/main-logo-black.svg";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <Logo />
    </div>
  )
}

export default Preloader;
