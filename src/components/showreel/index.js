import React from "react";
import Container from "../container";

import * as styles from "./styles.module.scss";

const Showreel = () => {
  return (
    <div className={styles.showreel}>
      <Container>
        <div className={styles.showreelInner}>
          <video autoPlay muted loop  className={styles.video}>
            <source src="/images/showreel/showreel-v7.mp4" type="video/mp4" />
            {/* Add more source elements for different video formats (WebM, etc.) */}
            Your browser does not support the video tag.
          </video>
          <iframe src="https://www.youtube.com/embed/QvraCdg4mRs?si=lt-jvIoM9Y53WQmw?autoplay=1" title="Duco - This is what we do." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Showreel;
