import React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const TextContent = ({text}) => {
  return (
    <div className={styles.textContent}>
      <Container>
        <div dangerouslySetInnerHTML={{__html: text}} />
      </Container>
    </div>
  )
}

export default TextContent;
