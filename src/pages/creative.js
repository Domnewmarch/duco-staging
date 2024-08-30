import * as React from 'react';
import Container from '../components/container';
import CreativeGrid from '../components/creativeGrid';
import Layout from '../components/layout';
import PageIntro from '../components/pageIntro';

const CreativePage = () => {
  const introContent = {
    title: 'Our Work'
  };

  return (
    <main>
      <Layout>
        <Container>
          <div>
            <h1>Our Work</h1>
            <p style={{ marginBottom: '10px' }}>Concept Creation, Campaign, Branding, Product & Graphic Design.</p>
          </div>
        </Container>
        <CreativeGrid />
      </Layout>
    </main>
  );
};

export default CreativePage;

export const Head = () => (
  <>
    <title>Duco | Our Work</title>
    <meta name="description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Duco | Creative" />
    <meta property="og:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta property="og:image" content="../../static/share-image.jpg" />
    <meta property="og:url" content="https://www.theduco.com/" />
    <meta property="og:site_name" content="Duco" />

    <meta name="twitter:title" content="Duco | Business for good" />
    <meta name="twitter:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="twitter:image" content="../../static/share-image.jpg" />
  </>
);
