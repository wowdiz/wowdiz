import React from "react";
import ranking_1 from "../../assets/images/test/ranking2.jpg"

const RankingView2 = () => {
  return (
        <div>
          <div className="ranking_funding_list">
            <div className="ranking_funding_list_main">
              <span>2</span>
            </div>
            <div className="ranking_funding_list_main_component">
              <div className="ranking_funding_list_main_component_text">
              이것 넣고 기름값 아꼈어요 명인이 만든 냉각수 첨가제
              </div>
              <div className="ranking_funding_list_main_component_sub">
                <span className="ranking_funding_list_main_component_sub_color">45%</span><span className="ranking_funding_list_main_component_sub_color_sub">10,000,000 원</span>
              </div>
            </div>
            <div className="ranking_funding_list_main_image_layout">
              <img className="ranking_funding_list_main_image_file" src={ranking_1} alt="" />
            </div>
          </div>
        </div>

);
};

export default RankingView2;