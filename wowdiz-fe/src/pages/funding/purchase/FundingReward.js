import React, { useEffect, useRef, useState } from "react";
import PurchaseStep from "../../../components/funding/PurchaseStep";
import RewardItem from "../../../components/funding/RewardItem";
import "../../../style/reward_item.css";
import "../../../style/reset.css";
import AxiosService from "../../../service/AxiosService";

//reducer = state를 업데이트를 하는 역할
//dispatch = state를 업데이트를 위한 요구
//action = 요구의 내용

//reducer를 통해서 특정 state를 수정하고 싶을 때마다
//dispatch(useReducer에 의해 만들어진 함수)를 호출하는데, 인자로 action을 담아서 보낸다.

//최종 선택한 값들이 담길 배열
//project_id를 동적으로 받아와야하고
//reward는 선택한 것만 담겨서 와야한다.

const FundingReward = () => {
  //나중에 동적으로 처리해야된다.
  const project_id = "1";

  const [rewardData, setRewardData] = useState([]);
  console.log(rewardData);
  useEffect(() => {
    AxiosService.post("/purchase/getRewards", project_id).then((res) => {
      setRewardData(res.data);
    });
  }, []);

  return (
    <div className="purchase_wrap">
      <PurchaseStep />
      <div className="reward_list">
        {rewardData &&
          rewardData.map((data, idx) => (
            <RewardItem key={idx} rewardData={data} />
          ))}
      </div>
    </div>
  );
};

export default FundingReward;
