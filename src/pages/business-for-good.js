import * as React from "react";
import Container from "../components/container";
import ContentSliderArrows from "../components/contentSliderArrows";
import Layout from "../components/layout";
import PageIntro from "../components/pageIntro";
import TextContent from "../components/textContent";
import TwoImages from "../components/twoImages";

const BusinessForGood = () => {
  const introText = {
    title: "Business for Good",
    text: `<p>Our ethos: business as a movement of good, achieved through creativity, partnerships, and collaborative action to make a significant impact on design, people and the planet.</p>
    <p>Initiatives we’ve created:</p>`
  };

  const images = ["/images/business-for-good/trees-for-life.jpg", "/images/business-for-good/1-for-the-planet.jpg"];

  const textContent = `
    <p>Additionally, we are committed to our own action.</p>
    <p>Since 2020, Duco has partnered with Trees for Life, a British rewilding charity, by supporting operational costs and planting one indigenous tree per day. Our objective is to restore the United Kingdom's lost forests, promote biodiversity and sequester carbon.</p>
    <p>In 2023 we became a member of 1% for the Planet. This program entails donating 1% of our total revenue to address environmental concerns worldwide.</p>
  `;

  const slides = ["/images/business-for-good/slider/Business for good-01.png", "/images/business-for-good/slider/Business for good-02.png", "/images/business-for-good/slider/Business for good-03.png", "/images/business-for-good/slider/Business for good-04.png", "/images/business-for-good/slider/Business for good-05.png", "/images/business-for-good/slider/Business for good-06.png"];

  return (
    <main>
      <Layout>
        <PageIntro content={introText} titleCentre={false} />
        <Container>
          <ContentSliderArrows content={slides} margin="both" />
        </Container>
        <TextContent text={textContent} />
        <TwoImages images={images} />
      </Layout>
    </main>
  );
};

export default BusinessForGood;

export const Head = () => (
  <>
    <title>Duco | Business For Good</title>
    <meta name="description" content="Duco is a visionary creative and communication movement transforming businesses for good." />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Duco | Business For Good" />
    <meta property="og:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta property="og:image" content="../../static/share-image.jpg" />
    <meta property="og:url" content="https://www.theduco.com/" />
    <meta property="og:site_name" content="Duco" />

    <meta name="twitter:title" content="Duco | Business for good" />
    <meta name="twitter:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="twitter:image" content="../../static/share-image.jpg" />
  </>
);
