import React from "react";
import Container from "../container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import * as styles from "./styles.module.scss";

const ContentSlider = ({ content = [], margin = "none" }) => {
  var settings = {
    speed: 500,
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const Slide = ({ slideData }) => {
    return <img className={styles.heightContainLarge} src={slideData} alt="Slide" />;
  };

  return (
    <div className={`${styles.contentSlider} ${styles[margin]}`}>
      <Slider {...settings}>{content && content.map((item, index) => <Slide key={`item-${index}`} slideData={item} />)}</Slider>
    </div>
  );
};

export default ContentSlider;
