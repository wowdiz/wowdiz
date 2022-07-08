import React from "react";
import "../../../style/detail_comm.css";
const DetailCommunity = () => {
  return (
    <div className="comm_detail">
      <p className="comm_header">응원 • 의견 댓글</p>
      <hr />
      <div className="comm_user_container">
        <div className="comm_user_avata"></div>
        <div className="comm_user_wrap">
          <span className="comm_user_name">권능</span>
          <span className="comm_date">등록일</span>
        </div>
        <div className="comm_content">
          나는 권능이에요 나이는 26살 사는곳은 원주 / <br /> 1조의 조장을 맡고
          있죠.. /<br />
          저에게 궁금하신 사항이 있으면 언제든지 불러주세요
        </div>
      </div>
    </div>
  );
};

export default DetailCommunity;
