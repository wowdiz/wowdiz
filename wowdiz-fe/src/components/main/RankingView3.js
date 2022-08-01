import React from "react";
import ranking_1 from "../../assets/images/test/ranking3.jpg";

const RankingView3 = () => {
  return (
        <div>
          <div className="ranking_funding_list">
            <div className="ranking_funding_list_main">
              <span>3</span>
            </div>
            <div className="ranking_funding_list_main_component">
              <div className="ranking_funding_list_main_component_text">
              화이트태닝한 줄, 샤워만으로 하얘지는 미백샤워크림 피부톤 자동보정!
              </div>
              <div className="ranking_funding_list_main_component_sub">
                <span className="ranking_funding_list_main_component_sub_color">85%</span><span className="ranking_funding_list_main_component_sub_color_sub">500,000 원</span>
              </div>
            </div>
            <div className="ranking_funding_list_main_image_layout">
              <img className="ranking_funding_list_main_image_file" src={ranking_1} alt="" />
            </div>
          </div>
        </div>

);
};

export default RankingView3;