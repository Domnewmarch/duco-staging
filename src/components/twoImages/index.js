import React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const TwoImages = ({images=[]}) => {
  return (
    <div className={styles.twoImages}>
      <Container>
        <div className={styles.twoImagesInner}>
          {images.map((image, index) => <img key={`item-${index}`} src={image} alt="" />)}
        </div>
      </Container>
    </div>
  )
}

export default TwoImages;
