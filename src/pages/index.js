import * as React from 'react';
import ClientGrid from '../components/clientGrid';
import Layout from '../components/layout';
import Showreel from '../components/showreel';
import TextBlock from '../components/textBlock';

const IndexPage = () => {
  const textBlock1Text = `<p>We're the ones behind the scenes,<br />The ones crafting the brands of tomorrow.<br /><br /></p> <p>We are duco.<br />the industry's best-kept secret.<br /></p>`;

  const clientList = [
    {
      name: 'Helly Hansen',
      image: {
        url: '/images/clients/helly-hansen.png',
        alt: 'Helly Hansen Logo'
      }
    },
    {
      name: 'Asics',
      image: {
        url: '/images/clients/asics.png',
        alt: 'Asics Logo'
      }
    },
    {
      name: 'Skewed',
      image: {
        url: '/images/clients/skewed.png',
        alt: 'Skewed Logo'
      }
    },
    {
      name: 'Ouma',
      image: {
        url: '/images/clients/puma.png',
        alt: 'Ouma Logo'
      }
    },
    {
      name: 'NBA',
      image: {
        url: '/images/clients/nba.png',
        alt: 'NBA Logo'
      }
    },
    {
      name: 'Disney',
      image: {
        url: '/images/clients/disney.png',
        alt: 'Disney Logo'
      }
    },
    {
      name: 'Adidas',
      image: {
        url: '/images/clients/adidas.png',
        alt: 'Adidas Logo'
      }
    },
    {
      name: 'MCM',
      image: {
        url: '/images/clients/mcm.png',
        alt: 'MCM Logo'
      }
    },
    {
      name: 'Helly Hansen Workwear',
      image: {
        url: '/images/clients/helly-hansen-workwear.png',
        alt: 'Helly Hansen Workwear Logo'
      }
    },
    {
      name: 'Parley',
      image: {
        url: '/images/clients/parley.png',
        alt: 'Parley Logo'
      }
    },
    {
      name: 'NFL',
      image: {
        url: '/images/clients/nfl.png',
        alt: 'NFL Logo'
      }
    },
    {
      name: 'Jack Wolfskin',
      image: {
        url: '/images/clients/jack-wolfskin.png',
        alt: 'Jack Wolfskin Logo'
      }
    },
    {
      name: 'soliver',
      image: {
        url: '/images/clients/soliver.png',
        alt: 'SOliver Logo'
      }
    },
    {
      name: 'Branches',
      image: {
        url: '/images/clients/branches.png',
        alt: 'Branches Logo'
      }
    },
    {
      name: 'Odisea',
      image: {
        url: '/images/clients/odisea.png',
        alt: 'Odisea Logo'
      }
    },
    {
      name: 'The North Face',
      image: {
        url: '/images/clients/north-face.png',
        alt: 'The North Face Logo'
      }
    },
    {
      name: 'Nike',
      image: {
        url: '/images/clients/nike.png',
        alt: 'Nike Logo'
      }
    },
    {
      name: 'Bear Grylls',
      image: {
        url: '/images/clients/bear-grylls.png',
        alt: 'Bear Grylls Logo'
      }
    },
    {
      name: 'North Sails',
      image: {
        url: '/images/clients/north-sails.png',
        alt: 'North Sails Logo'
      }
    },
    {
      name: 'Green Galvin',
      image: {
        url: '/images/clients/green-galvin.png',
        alt: 'Green Galvin Logo'
      }
    }
  ];

  return (
    <main>
      <Layout>
        <Showreel />
        <TextBlock />
        <ClientGrid clients={clientList} />
      </Layout>
    </main>
  );
};

export default IndexPage;

export const Head = () => (
  <>
    <title>Duco | Business for good</title>
    <meta name="description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Duco | Business for good" />
    <meta property="og:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta property="og:image" content="../../static/share-image.jpg" />
    <meta property="og:url" content="https://www.theduco.com/" />
    <meta property="og:site_name" content="Duco" />

    <meta name="twitter:title" content="Duco | Business for good" />
    <meta name="twitter:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="twitter:image" content="../../static/share-image.jpg" />
  </>
);
