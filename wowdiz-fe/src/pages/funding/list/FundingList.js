import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../../style/funding.css";

const FundingList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <div className="category_wrap">
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
        <div className="category_container">
          <div className="category_icon">
            <div className="category_name">category</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingList;
