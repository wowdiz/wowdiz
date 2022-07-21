import React from "react";
import RewardOption from "./../../pages/maker/RewardOption";
import { useState, useEffect } from "react";
const RewardOptionSelection = ({ rewardOptionDto }) => {
  const [optionList, setOptionList] = useState(
    rewardOptionDto.reward_option_detail.split(",")
  );

  // useEffect(() => {
  //   // 검정,하늘,노랑
  //   setOptionList(rewardOptionDto.reward_option_detail.split(","));
  // }, []);

  return (
    <div>
      <p>옵션: {rewardOptionDto.reward_option_name}</p>
      {/* 시작 */}
      <select
        name="reward_option_detail"
        id="reward_option_detail"
        className="reward_option_detail"
        defaultValue={""}
        //onChange={handleOptionSelect}
      >
        <option value={""} disabled>
          옵션을 선택하세요.
        </option>
        {optionList &&
          optionList.map((optionValue, idx) => (
            <option key={idx} value={optionValue}>
              {optionValue}
            </option>
          ))}
      </select>
      {/* 끝 */}
    </div>
  );
};

export default RewardOptionSelection;
