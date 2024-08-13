import React from 'react';
import ContactText from '../components/contactText';
import Container from '../components/container';
import IntroNew from '../components/introNew';
import Layout from '../components/layout';
import SingleImage from '../components/singleImage';
import SingleImageLarge from '../components/singleImageLarge';

const ContactPage = () => {
  const image = {
    image: '/images/contact.png'
  };

  return (
    <main>
      <Layout>
        <Container>
          <div>
            <h1>Let's Connect</h1>
            <p>Looking to solve a problem, expand your team's capabilites, build your business or simply get an external viewpoint? Contact us.</p>
          </div>
          <SingleImageLarge image={image.image} note={image.note} />
        </Container>
        <ContactText />
      </Layout>
    </main>
  );
};

export default ContactPage;

export const Head = () => (
  <>
    <title>Duco | Contact Us</title>
    <meta name="description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Duco | Contact Us" />
    <meta property="og:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta property="og:image" content="../../static/share-image.jpg" />
    <meta property="og:url" content="https://www.theduco.com/" />
    <meta property="og:site_name" content="Duco" />

    <meta name="twitter:title" content="Duco | Business for good" />
    <meta name="twitter:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="twitter:image" content="../../static/share-image.jpg" />
  </>
);
