import React from "react";
import "../../style/purchase_step.css";

const PurchaseStep = () => {
  return (
    <div className="purchase_step">
      <ol>
        <li className="step_active">
          <em>리워드선택</em>
        </li>
        <li>
          <em>결제 예약</em>
        </li>
        <li>
          <em>소문내기</em>
        </li>
      </ol>
    </div>
  );
};

export default PurchaseStep;
