import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons

import * as styles from "./styles.module.scss";

const ContentSliderArrows = ({ content = [], margin = "none" }) => {
  const CustomPrevArrow = props => (
    <button {...props} className={styles.customArrowPrev}>
      <FaChevronLeft />
    </button>
  );

  const CustomNextArrow = props => (
    <button {...props} className={styles.customArrowNext}>
      <FaChevronRight />
    </button>
  );

  const settings = {
    speed: 1000,
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  const Slide = ({ slideData }) => {
    return <img src={slideData} alt="Slide" />;
  };

  return (
    <div className={`${styles.contentSlider} ${styles[margin]}`}>
      <Slider {...settings}>{content && content.map((item, index) => <Slide key={`item-${index}`} slideData={item} />)}</Slider>
    </div>
  );
};

export default ContentSliderArrows;
