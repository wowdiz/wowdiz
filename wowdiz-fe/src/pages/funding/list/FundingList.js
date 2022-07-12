import React from "react";


const FundingList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div>
      
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
