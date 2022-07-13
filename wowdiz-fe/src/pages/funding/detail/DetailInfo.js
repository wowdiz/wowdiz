import React from "react";
import "../../../style/detail_info.css";

const DetailInfo = () => {
  return (
    <div className="content_info">
      <div className="info_header">프로젝트 진행 관련 안내사항입니다.</div>
      <div className="info_date">
        <b>펀딩종료일 : </b>2022.07.08 &nbsp;<b>결제예정일 : </b>
        2022.08.10 &nbsp;
        <b>발송예정일 : </b>2023.05.08
      </div>
      <div className="info_content_body">
        <strong>진행자 교환 및 환불 정책</strong>
        <br />
        <br />겉 포장박스의 스크래치 및 손상은 참여지님께 배송되는 과정에서
        발생할 수 있습니다. 제품 사이즈는 측정방식에 따라 1-3cm 정도 차이가 날
        수 있습니다. 다음과 같은 사항 시 교환 및 환불이 안됩니다. -참여자의 책임
        있는 사유로 리워드가 멸실/훼손된 경우(단지 확인을 위한 포장 훼손 제외)
        -참여자의 사용/소비에 의해 리워드의 가치가 감소한 경우 -시간 경과로 인해
        재판매가 곤란할 정도로 리워드 가치가 상실한 경우 -참여자의 단순 변심
        -진행자를 통환 교환/환불 접수 절차 없이 임의로 반송한 경우 문의처
        <strong>책임자 : 권능 010-4070-7653</strong>
      </div>
    </div>
  );
};

export default DetailInfo;
