import React from "react";
import RewardOption from "./../../pages/maker/RewardOption";
import { useState, useEffect } from "react";

const RewardOptionSelection = ({
  singleOption,
  singleReward,
  singleRewardIndex,
  singleOptionIndex,
  initialOptionList,
  purchaseInfo,
  setPurchaseInfo,
  initialRewards,
  newCurrentOptionList,
  setNewCurrentOptionList,
  qty,
}) => {
  const splitOptionList = singleOption.reward_option_detail.split(",");

  const handleOptionChange = (e) => {
    let currentSingleOption = {
      reward_option_name: singleOption.reward_option_name,
      reward_option_type: singleOption.reward_option_type,
      [e.target.name]: e.target.value,
    };

    let tmpOptionList = [...newCurrentOptionList];

    tmpOptionList[singleOptionIndex] = currentSingleOption;

    setNewCurrentOptionList(tmpOptionList);

    let newSingleReward = {
      ...singleReward,
      qty: qty,
      optionList: newCurrentOptionList,
    };

    //체크를 순서대로 안하면 문제가 발생함.
    //기준을 singleRewardIndex주지 말고 reward_id로 줄수 있는 방법을 찾아야함.

    for (let i = 0; i < purchaseInfo.rewards.length; i++) {
      if (singleReward.reward_id === purchaseInfo.rewards[i].reward_id) {
        purchaseInfo.rewards[i] = newSingleReward;
      }
    }

    //    purchaseInfo.rewards[singleRewardIndex] = newSingleReward;
  };

  console.log(newCurrentOptionList);
  console.log("@@@@ purchaseInfo", purchaseInfo);
  return (
    <>
      {/* <p>옵션: {singleOption.reward_option_name}</p> */}
      <p>옵션: </p>
      <select
        name="reward_option_detail"
        id="reward_option_detail"
        className="reward_option_detail"
        defaultValue={""}
        onChange={(e) => {
          handleOptionChange(e);
        }}
      >
        <option value={""} disabled>
          옵션을 선택하세요.
        </option>
        {splitOptionList &&
          splitOptionList.map((optionValue, idx) => (
            <option index={idx} key={idx} value={optionValue}>
              {optionValue}
            </option>
          ))}
      </select>
    </>
  );
};

export default RewardOptionSelection;
