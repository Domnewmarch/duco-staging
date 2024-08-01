import * as React from "react";
import Layout from "../components/layout";
import PageIntro from "../components/pageIntro";
import SingleImage from "../components/singleImage";

const Workshops = () => {
  const introContent1 = {
    title: "Services",
    text: `
      <p>At Duco, we embody a dynamic fusion of creativity and communication, creating solutions to ignite opportunities, increase engagement and grow your movement.</p>
     
      <p>We are trusted by Brands around the world for our expertise in:</p>
      <ul>
        <li>Brand Strategy</li>
        <li>Concept & Brand Creation</li>
        <li>Visual Identity</li>
        <li>Campaign</li>
        <li>Creative Direction</li>
        <li>Art Direction</li>
        <li>Design</li>
        <li>Graphics, Illustration & Print</li>
        <li>Animation</li>
        <li>Social Engagement</li>
        <li>Sustainability & Positive impact initiatives</li>
      </ul>
      <p>To see how we can enrich your business, <a href="/contact">contact us.</a></p>
    `
  };

  const singleImage = {
    image: "/images/workshops/office.jpg",
    note: "Our Studio at Nääs Fabriker"
  };

  return (
    <main>
      <Layout>
        <PageIntro content={introContent1} />
        <SingleImage image={singleImage.image} note={singleImage.note} />
      </Layout>
    </main>
  );
};

export default Workshops;

export const Head = () => (
  <>
    <title>Duco | Services</title>
    <meta name="description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="robots" content="index, follow" />

    <meta property="og:type" content="website" />
    <meta property="og:title" content="Duco | Services" />
    <meta property="og:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta property="og:image" content="../../static/share-image.jpg" />
    <meta property="og:url" content="https://www.theduco.com/" />
    <meta property="og:site_name" content="Duco" />

    <meta name="twitter:title" content="Duco | Business for good" />
    <meta name="twitter:description" content="Duco is a visionary creative and communication movement transforming businesses for good.." />
    <meta name="twitter:image" content="../../static/share-image.jpg" />
  </>
);
