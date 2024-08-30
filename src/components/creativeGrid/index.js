import React from 'react';
import Container from '../container';
import ContentSlider from '../contentSlider';

import * as styles from './styles.module.scss';

const CreativeGrid = () => {
  const slider1 = [`/images/creative/Section 1 slideshow/1.2.jpg`, `/images/creative/Section 1 slideshow/1.3.jpg`, `/images/creative/Section 1 slideshow/1.4.jpg`, `/images/creative/Section 1 slideshow/1.5.png`, `/images/creative/Section 1 slideshow/1.6.png`, `/images/creative/Section 1 slideshow/1.7.png`, `/images/creative/Section 1 slideshow/1.8.png`];

  const fixed2 = `/images/creative/Section 2/02.1.jpg`;

  const fixedSpongebob = `/images/creative/obey-spongebob.png`;

  const fixedNikeQuantum = `/images/creative/nike-quantum.png`;

  const slider3 = [`/images/creative/Section 3/3.1.jpg`, `/images/creative/Section 3/3.2.jpg`, `/images/creative/Section 3/3.3.jpg`, `/images/creative/Section 3/3.4.jpg`, `/images/creative/Section 3/3.5.jpg`, `/images/creative/Section 3/3.6.jpg`];

  const fixed4 = `/images/creative/Section 4/Asics.jpg`;

  const slider5 = [`/images/creative/Section 5/5.1.jpg`, `/images/creative/Section 5/5.2.jpg`, `/images/creative/Section 5/5.3.jpg`];

  const fixed6 = `/images/creative/Section 6/6.1.jpg`;

  const fixed7 = `/images/creative/section 7/Puma_loop.gif`;

  const fixed8 = `/images/creative/Section 8/8.1.jpg`;

  const fixed9 = `/images/creative/Section 9/09.1.jpg`;

  const fixed10 = `/images/creative/Section 10/10.1-new.jpg`;

  const mcmVideo = `/images/creative/mcm-video.mp4`;

  const slider12 = [`/images/creative/Section 12/12.1 new.png`, `/images/creative/Section 12/12.2 new.png`, `/images/creative/Section 12/12.3 new.png`, `/images/creative/Section 12/12.4 new.png`];

  const fixed14 = `/images/creative/Section 14/14.1.jpg`;

  const slider15 = [`/images/creative/Section 15/15.1.jpg`, `/images/creative/Section 15/15.2.jpg`, `/images/creative/Section 15/15.3.jpg`, `/images/creative/Section 15/15.4.jpg`];

  const fixed16 = `/images/creative/*section 16/16.1.jpg`;

  const slider17 = [`/images/creative/*section 17/17.1.jpg`, `/images/creative/*section 17/17.2.jpg`, `/images/creative/*section 17/17.3.jpg`, `/images/creative/*section 17/17.4.jpg`];

  const fixed18 = `/images/creative/Section 18/18.1.jpg`;

  const fixed19 = `/images/creative/Section 19/19.1.jpg`;

  const slider20 = [`/images/creative/Section 20/20.2.jpg`, `/images/creative/Section 20/20.3.jpg`, `/images/creative/Section 20/20.5.jpg`, `/images/creative/Section 20/20.6-update.jpg`, `/images/creative/Section 20/20.7.jpg`, `/images/creative/Section 20/20.8.jpg`];

  const slider22 = [`/images/creative/Section 22/22.1.jpg`, `/images/creative/Section 22/22.2.jpg`, `/images/creative/Section 22/22.3.jpg`, `/images/creative/Section 22/22.4.jpg`, `/images/creative/Section 22/22.5.jpg`, `/images/creative/Section 22/22.6.jpg`];

  const fixed23 = `/images/creative/section 23/Duco-GG_Logo_Spin.gif`;

  const fixed24 = `/images/creative/Section 24/24.1.jpg`;

  const slider25 = [`/images/creative/Section 25/25.1.jpg`, `/images/creative/Section 25/25.2.jpg`, `/images/creative/Section 25/25.3.jpg`, `/images/creative/Section 25/25.4.jpg`, `/images/creative/Section 25/25.5.jpg`];

  const slider26 = [`/images/creative/Section 26/26.1.jpg`, `/images/creative/Section 26/26.2.jpg`, `/images/creative/Section 26/26.3.jpg`, `/images/creative/Section 26/26.4.jpg`, `/images/creative/Section 26/26.5.jpg`];

  const fixed27 = `/images/creative/Section 27/27.1.jpg`;

  const fixed28 = `/images/creative/Section 28/28.1.jpg`;

  const fixed29 = `/images/creative/Section 29/29.1.jpg`;

  const fixed30 = `/images/creative/section 30/30.1.jpg`;

  const slider31 = [`/images/creative/Section 31/31.1.jpg`, `/images/creative/Section 31/31.2.jpg`, `/images/creative/Section 31/31.3.jpg`, `/images/creative/Section 31/31.5.jpg`, `/images/creative/Section 31/boyhood.png`, `/images/creative/Section 31/mcm.png`];

  const fixed32 = `/images/creative/section 32/32.1.jpg`;

  const slider33 = [`/images/creative/Section 33/33.1.jpg`, `/images/creative/Section 33/33.2.jpg`, `/images/creative/Section 33/33.3.jpg`, `/images/creative/Section 33/33.4.jpg`, `/images/creative/Section 33/33.5.jpg`, `/images/creative/Section 33/33.6.jpg`, `/images/creative/Section 33/33.7.jpg`];

  const slider35 = [`/images/creative/Section 35/35.1.jpg`, `/images/creative/Section 35/35.2.jpg`, `/images/creative/Section 35/35.3.jpg`, `/images/creative/Section 35/35.4.jpg`];

  const fixed34 = `/images/creative/section 34/34.1.jpg`;

  const pumaOne = `/images/creative/puma-one.png`;

  const hhBottle = `/images/creative/hh-bottle.png`;

  return (
    <div className={styles.creativeGrid}>
      <div>
        <Container>
          <video autoPlay muted loop className={styles.video}>
            <source src="/images/creative/northface-vid.mp4" type="video/mp4" />
            {/* Add more source elements for different video formats (WebM, etc.) */}
            Your browser does not support the video tag.
          </video>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.quarter}`}>
              <img src={fixed2} />
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider3} margin="none" />
              </Container>
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <img src={fixed4} />
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider5} margin="none" />
              </Container>
            </div>
          </div>
        </Container>
      </div>
      <div className={`${styles.full}`}>
        <Container>
          <ContentSlider content={slider1} />
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={fixedNikeQuantum} />
            </div>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={fixedSpongebob} />
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.third}`}>
              <img src={fixed6} />
            </div>
            <div className={`${styles.work} ${styles.third}`}>
              <img src={fixed7} />
            </div>
            <div className={`${styles.work} ${styles.third}`}>
              <img src={fixed8} />
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={fixed9} />
            </div>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={fixed10} />
            </div>
          </div>
        </Container>
      </div>
      <div className={`${styles.full} ${styles.videoBlockCard}`}>
        <Container>
          <video className={styles.videoMargin} autoPlay muted loop>
            <source src="/images/creative/section 11/section11.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.quarter}`}>
              <ContentSlider content={slider12} margin="none" />
            </div>
            <div className={`${styles.work} ${styles.quarter} ${styles.videoBlockCard}`}>
              <video className={styles.videoMargin} autoPlay muted loop>
                <source src="/images/creative/section 13/TGE_lager_2.qt" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <img src={fixed14} />
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider15} margin="none" />
              </Container>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.third}`}>
              <img src={fixed16} />
            </div>
            <div className={`${styles.work} ${styles.third}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider17} margin="none" />
              </Container>
            </div>
            <div className={`${styles.work} ${styles.third}`}>
              <img src={fixed18} />
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={`${styles.creativeGridRowInner} ${styles.heightContainMedium}`}>
            <div className={`${styles.work} ${styles.half}`}>
              <img style={{ maxHeight: '355px' }} className={styles.heightContainMedium} src={fixed19} />
            </div>
            <div className={`${styles.work} ${styles.half} ${styles.heightContainMedium}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider20} margin="none" />
              </Container>
            </div>
          </div>
        </Container>
      </div>
      <div className={`${styles.full} ${styles.videoBlockCard}`}>
        <Container>
          <video className={styles.videoMargin} autoPlay muted loop>
            <source src="/images/creative/section 21/section21.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.quarter}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider22} margin="none" />
              </Container>
            </div>
            <div className={`${styles.work} ${styles.quarter} ${styles.videoBlockCard}`}>
              <video className={styles.videoMargin} autoPlay muted loop>
                <source src="/images/creative/section 23/Duco-GG_Logo_Spin-full.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <img src={fixed24} />
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider25} margin="none" />
              </Container>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.third}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider26} margin="none" />
              </Container>
            </div>
            <div className={`${styles.work} ${styles.third}`}>
              <img src={fixed27} />
            </div>
            <div className={`${styles.work} ${styles.third}`}>
              <img src={fixed28} />
            </div>
          </div>
        </Container>
      </div>
      <div className={`${styles.full}`}>
        <Container>
          <video autoPlay muted loop className={styles.video}>
            <source src="/images/creative/mcm-video.mp4" type="video/mp4" />
            {/* Add more source elements for different video formats (WebM, etc.) */}
            Your browser does not support the video tag.
          </video>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={pumaOne} />
            </div>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={hhBottle} />
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={fixed29} />
            </div>
            <div className={`${styles.work} ${styles.half}`}>
              <img src={fixed30} />
            </div>
          </div>
        </Container>
      </div>
      <div className={`${styles.full}`}>
        <Container>
          <Container padding="no-padd">
            <ContentSlider content={slider31} margin="none" />
          </Container>
        </Container>
      </div>
      <div className={styles.creativeGridRow}>
        <Container>
          <div className={styles.creativeGridRowInner}>
            <div className={`${styles.work} ${styles.quarter}`}>
              <img src={fixed32} />
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider33} margin="none" />
              </Container>
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <img src={fixed34} />
            </div>
            <div className={`${styles.work} ${styles.quarter}`}>
              <Container padding="no-padd">
                <ContentSlider content={slider35} margin="none" />
              </Container>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CreativeGrid;
