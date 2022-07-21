import React, { useState, useReducer, useEffect } from "react";
import RewardOptionSelection from "./RewardOptionSelection";
import RewardOptionAnswer from "./RewardOptionAnswer";

// initialState.rewardOptionDto.concat(initialState.rewardOptionDto)
const RewardItem = ({ rewardData }) => {
  const initialState = {
    index: 0,
    rewardOptionDto: [rewardData.rewardOptionDto],
  };

  const initialRewardOption = rewardData;
  console.log("========================================================");
  console.log(rewardData);
  const [checkReward, setCheckReward] = useState(false);
  const [qty, setQty] = useState(1);
  const [optionList, setOptionList] = useState(initialState);

  //const [rewardOptionList, dispatch] = useReducer(reducer, []);
  const handleCheckReward = () => {
    setCheckReward(!checkReward);
    console.log("========handleCheckReward========");
    console.log(initialRewardOption);
  };

  // const handleOnChangeQty = (e) => {
  //   let tmp = Number.parseInt(e.target.value);
  //   if (tmp <= 0) {
  //     alert("0보다 작음");
  //     return;
  //   }
  // };

  const handleDecreaseBtn = () => {
    if (qty <= 1) {
      alert("1개 이하로 수량을 선택할 수 없습니다.");
      return;
    }
    setQty((qty) => Number.parseInt(qty) - 1);
  };

  const handleIncreaseBtn = () => {
    // 제한수량 이상은 못 늘어나게 유효성 필요.
    const limit = Number.parseInt(rewardData.purchase_limit);

    if (qty >= limit) {
      alert("최대 수량을 초과했습니다.");
      setQty(limit);
      return;
    }

    setQty((qty) => Number.parseInt(qty) + 1);
    let newOptionList = optionList;

    newOptionList.rewardOptionDto = newOptionList.rewardOptionDto.concat(
      initialState.rewardOptionDto
    );

    newOptionList.index = newOptionList.index + 1;

    setOptionList(newOptionList);
    console.log(newOptionList);
  };

  return (
    <li>
      <div className="reward_box">
        <div className="left">
          <input type={"checkbox"} onClick={handleCheckReward} />
        </div>
        <div className="right">
          <p className="reward_price">
            {rewardData.reward_price}원 펀딩합니다.
          </p>
          <p className="reward_title">{rewardData.reward_title}</p>
          <p className="reward_info">{rewardData.reward_info}</p>

          {checkReward && (
            <div className="reward_detail">
              <div className="reward_amount">
                <p>수량:</p>
                <button
                  type="button"
                  name="decrease_btn"
                  onClick={handleDecreaseBtn}
                >
                  -
                </button>
                <input
                  className="reward_qty"
                  type={"input"}
                  name="count"
                  value={qty}
                  //onChange={handleOnChangeQty}
                />
                <button
                  type="button"
                  name="increase_btn"
                  onClick={handleIncreaseBtn}
                >
                  +
                </button>
              </div>
              <div className="reward_option">
                {rewardData.rewardOptionDto !== 0 &&
                  optionList.rewardOptionDto.map((optionData, idx) =>
                    optionData.map((data, idx) =>
                      data.reward_option_detail ? (
                        <RewardOptionSelection
                          key={idx}
                          rewardOptionDto={data}
                        />
                      ) : (
                        <RewardOptionAnswer key={idx} rewardOptionDto={data} />
                      )
                    )
                  )}
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
};

export default RewardItem;
