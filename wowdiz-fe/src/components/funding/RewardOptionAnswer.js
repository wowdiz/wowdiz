import React from "react";

const RewardOptionSelection = ({ rewardOptionDto }) => {
  console.log(rewardOptionDto);
  return (
    <div>
      <p>옵션: {rewardOptionDto.reward_option_name}</p>
      <input
        className="reward_option_detail"
        placeholder="옵션을 입력해주세요."
      ></input>
    </div>
  );
};

export default RewardOptionSelection;
