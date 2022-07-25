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

    // setNewCurrentOptionList({
    //   ...newCurrentOptionList,
    //   [singleOptionIndex]: currentSingleOption,
    // });

    // let newSingleReward = {
    //   ...singleReward,
    //   optionList: newCurrentOptionList,
    // };

    for (let i = 0; i < purchaseInfo.rewards.length; i++) {
      if (singleReward.reward_id === purchaseInfo.rewards[i].reward_id) {
        purchaseInfo.rewards[i] = newSingleReward;
      }
    } // purchaseInfo.rewards[singleRewardIndex] = newSingleReward;
  };

  return (
    <>
      <p>옵션: {singleOption.reward_option_name}</p>
      <input
        name="reward_option_detail"
        className="reward_option_detail"
        placeholder="옵션을 입력해주세요."
        onChange={(e) => {
          handleOptionChange(e);
        }}
      />
    </>
  );
};

export default RewardOptionSelection;
