import React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Showreel = ({text}) => {
  return (
    <div className={styles.textBlock}>
      <Container>
        <div dangerouslySetInnerHTML={{__html: text}} />
      </Container>
    </div>
  )
}

export default Showreel;
