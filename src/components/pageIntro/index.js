import React from "react";
import Container from "../container";
import * as styles from "./styles.module.scss";

const PageIntro = ({ content, marginTop = false, titleCentre = false }) => {
  return (
    <div className={`${styles.pageIntro} ${marginTop && styles.marginTop}`}>
      <Container>
        {content.title && <h1 className={`${titleCentre ? styles.titleCentre : ""}`}>{content.title}</h1>}
        {content.text && <div dangerouslySetInnerHTML={{ __html: content.text }} />}
      </Container>
    </div>
  );
};

export default PageIntro;
