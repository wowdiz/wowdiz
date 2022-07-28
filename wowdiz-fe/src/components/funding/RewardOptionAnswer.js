import React from "react";

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
  const handleOptionChange = (e) => {
    let currentSingleOption = {
      project_reward_option_name: singleOption.project_reward_option_name,
      project_reward_option_type: singleOption.project_reward_option_type,
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

    // setNewCurrentOptionList({
    //   ...newCurrentOptionList,
    //   [singleOptionIndex]: currentSingleOption,
    // });

    // let newSingleReward = {
    //   ...singleReward,
    //   optionList: newCurrentOptionList,
    // };

    for (let i = 0; i < purchaseInfo.rewards.length; i++) {
      if (
        singleReward.project_reward_id ===
        purchaseInfo.rewards[i].project_reward_id
      ) {
        purchaseInfo.rewards[i] = newSingleReward;
      }
    } // purchaseInfo.rewards[singleRewardIndex] = newSingleReward;
  };

  return (
    <>
      <p>옵션: {singleOption.project_reward_option_name}</p>
      <input
        name="project_reward_option_detail"
        className="project_reward_option_detail"
        placeholder="옵션을 입력해주세요."
        onChange={(e) => {
          handleOptionChange(e);
        }}
      />
    </>
  );
};

export default RewardOptionSelection;
