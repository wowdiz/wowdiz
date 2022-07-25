import React, { useState, useEffect } from "react";
import RewardOptionSelection from "./RewardOptionSelection";
import RewardOptionAnswer from "./RewardOptionAnswer";
import { style } from "@mui/system";

const RewardItem = ({
  singleReward,
  singleRewardIndex,
  purchaseInfo,
  setPurchaseInfo,
  project,
  setProject,
  totalPrice,
  setTotalPrice,
}) => {
  const [checkbox, setCheckbox] = useState(false);
  const [qty, setQty] = useState(1);
  const limit = Number.parseInt(singleReward.purchase_limit);

  //DB에서 가져온 초기 값
  const initialRewards = singleReward;
  const initialOptionList = singleReward.optionList;

  //옵션
  const [optionArr, setOptionArr] = useState(initialOptionList);

  //현재 선택한 옵션
  const [newCurrentOptionList, setNewCurrentOptionList] =
    useState(initialOptionList);

  const handleDecreaseBtn = () => {
    if (qty <= 1) {
      alert("1개 이하로 수량을 선택할 수 없습니다.");
      return;
    }
    setQty((qty) => qty - 1);
    setOptionArr(
      optionArr.slice(0, optionArr.length - initialOptionList.length)
    );

    setTotalPrice(totalPrice - singleReward.reward_price);

    setNewCurrentOptionList(
      newCurrentOptionList.slice(
        0,
        newCurrentOptionList.length - initialOptionList.length
      )
    );

    let newSingleReward = {
      ...singleReward,
      optionList: newCurrentOptionList,
    };

    purchaseInfo.rewards[singleRewardIndex] = newSingleReward;
  };

  const handleIncreaseBtn = () => {
    // 제한수량 이상은 못 늘어나게 유효성 필요.
    if (qty >= limit) {
      alert("최대 수량을 초과했습니다.");
      setQty(limit);
      return;
    }

    setQty((qty) => qty + 1);

    setTotalPrice(totalPrice + singleReward.reward_price);

    let newOptionList = optionArr;
    newOptionList = newOptionList.concat(initialOptionList);
    setOptionArr(newOptionList);
  };

  useEffect(() => {
    if (checkbox) {
      setTotalPrice(totalPrice + singleReward.reward_price);

      let newSingleReward = {
        ...singleReward,
        qty: qty,
      };

      setPurchaseInfo({
        ...purchaseInfo,
        project_id: project.project_id,

        project_name: project.project_name,

        open_date: project.open_date,
        close_date: project.close_date,

        rewards: purchaseInfo.rewards.concat(newSingleReward).sort(),
      });

      purchaseInfo.total_price = totalPrice;
    } else {
      if (totalPrice > 0)
        setTotalPrice(totalPrice - singleReward.reward_price * qty);

      let afterDeleteRewards = purchaseInfo.rewards.filter(
        (data) => singleReward.reward_id !== data.reward_id
      );

      setQty(1);
      setOptionArr(initialOptionList);
      setNewCurrentOptionList(initialOptionList);

      setPurchaseInfo({
        ...purchaseInfo,
        rewards: afterDeleteRewards,
      });
    }
  }, [checkbox]);

  console.log("###purchaseInfo###", purchaseInfo);
  const handleCheckBox = () => {
    setCheckbox(!checkbox);
  };

  console.log("purchaseInfo", purchaseInfo);
  console.log("newCurrentOptionList", newCurrentOptionList);
  // console.log("selectedOptionList", selectedOptionList);

  console.log("singleReward", singleReward);
  return (
    <li>
      <div className={checkbox ? "reward_box checked" : "reward_box"}>
        <div className="left">
          <input
            type={"checkbox"}
            className="reward_checkbox"
            onChange={() => handleCheckBox()}
          />
        </div>
        <div className="right">
          <p className="reward_price">
            {singleReward.reward_price}원 펀딩합니다.
          </p>
          <p className="reward_title">{singleReward.reward_title}</p>
          <p className="reward_info">{singleReward.reward_info}</p>
          <p className="reward_delivery">
            배송비:{singleReward.parcel_fee}원 │ 리워드 제공 예상일 :{" "}
            {project.delivery_date} 예정
          </p>

          {checkbox && (
            <div className="reward_detail">
              <div className="reward_amount">
                <p>수량:</p>
                <button
                  type="button"
                  className="decrease_btn"
                  onClick={handleDecreaseBtn}
                >
                  -
                </button>
                <input
                  className="reward_qty"
                  type={"input"}
                  name="count"
                  value={qty}
                  onChange={() => {}}
                />
                <button
                  type="button"
                  className="increase_btn"
                  onClick={handleIncreaseBtn}
                >
                  +
                </button>
              </div>
              <div className="reward_option">
                {singleReward.optionList !== 0 &&
                  optionArr.map((singleOption, singleOptionIndex) =>
                    singleOption.reward_option_detail ? (
                      <RewardOptionSelection
                        key={singleOptionIndex}
                        singleReward={singleReward}
                        singleRewardIndex={singleRewardIndex}
                        singleOptionIndex={singleOptionIndex}
                        singleOption={singleOption}
                        initialOptionList={initialOptionList}
                        purchaseInfo={purchaseInfo}
                        setPurchaseInfo={setPurchaseInfo}
                        initialRewards={initialRewards}
                        newCurrentOptionList={newCurrentOptionList}
                        setNewCurrentOptionList={setNewCurrentOptionList}
                        qty={qty}
                      />
                    ) : (
                      <RewardOptionAnswer
                        key={singleOptionIndex}
                        singleReward={singleReward}
                        singleRewardIndex={singleRewardIndex}
                        singleOptionIndex={singleOptionIndex}
                        singleOption={singleOption}
                        initialOptionList={initialOptionList}
                        purchaseInfo={purchaseInfo}
                        setPurchaseInfo={setPurchaseInfo}
                        initialRewards={initialRewards}
                        newCurrentOptionList={newCurrentOptionList}
                        setNewCurrentOptionList={setNewCurrentOptionList}
                        qty={qty}
                      />
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
