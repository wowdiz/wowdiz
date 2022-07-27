import React from "react";
import ranking_1 from "../../assets/images/test/ranking_1.jpg";

const RankingView = () => {
  return (
        <div>
          <div className="ranking_funding_list">
            <div className="ranking_funding_list_main">
              <span>1</span>
            </div>
            <div className="ranking_funding_list_main_component">
              <div className="ranking_funding_list_main_component_text">
                마스카라 아니에요. 속눈썹영양제에요.영양공급과 메이크업 효과까지!
              </div>
              <div className="ranking_funding_list_main_component_sub">
                <span className="ranking_funding_list_main_component_sub_color">30%</span><span className="ranking_funding_list_main_component_sub_color_sub">1,000,000 원</span>
              </div>
            </div>
            <div className="ranking_funding_list_main_image_layout">
              <img className="ranking_funding_list_main_image_file" src={ranking_1} alt="" />
            </div>
          </div>
        </div>

);
};

export default RankingView;
