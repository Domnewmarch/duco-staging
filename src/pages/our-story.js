// File: pages/OurStory.js

import React from 'react';
import Container from '../components/container';
import IntroNew from '../components/introNew';
import Layout from '../components/layout';
import PageIntro from '../components/pageIntro';
import SingleImage from '../components/singleImage';
import ThreeRowContent from '../components/threeRowContent';

const OurStory = () => {
  const textContent = {
    title: 'About',
    text: `<p>We are Duco</p>`
  };

  const image = {
    image: '/images/our-story/secret-sauce.png'
  };

  return (
    <main>
      <Layout>
        <IntroNew />
        <SingleImage image={image.image} note={image.note} />
        <ThreeRowContent />
      </Layout>
    </main>
  );
};

export default OurStory;

export const Head = () => (
  <>
    <title>Duco | Our Story</title>
    <meta name="description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="robots" content="index, follow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Duco | Our Story" />
    <meta property="og:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta property="og:image" content="../../static/share-image.jpg" />
    <meta property="og:url" content="https://www.theduco.com/" />
    <meta property="og:site_name" content="Duco" />
    <meta name="twitter:title" content="Duco | Business for good" />
    <meta name="twitter:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="twitter:image" content="../../static/share-image.jpg" />
  </>
);
