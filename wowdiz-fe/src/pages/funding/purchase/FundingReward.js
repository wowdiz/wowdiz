import React, { useEffect, useRef, useState, useReducer } from "react";
import PurchaseStep from "../../../components/funding/PurchaseStep";
import "../../../style/purchase_reward_item.css";
import "../../../style/reset.css";
import AxiosService from "../../../service/AxiosService";
import RewardItem from "./../../../components/funding/RewardItem";
import { NavLink } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const FundingReward = () => {
  const { project_id } = useParams();

  const [project, setProject] = useState([]);
  const navigator = useNavigate();
  const [rewardData, setRewardData] = useState([]);

  useEffect(() => {
    AxiosService.post("/purchase/getRewards", project_id).then((res) => {
      setProject(res.data[0]);
      setRewardData(res.data[0].rewardList);
      console.log(res.data);
    });
  }, []);

  const [totalPrice, setTotalPrice] = useState(0);
  //구매정보가 담길 곳
  const [purchaseInfo, setPurchaseInfo] = useState({
    project_id: project_id,
    project_name: "",
    total_qty: 0,
    total_price: 0,
    rewards: [], //선택한 리워드를 여기다가 주입.
  });

  //리워드가 담길 곳

  useEffect(() => {
    purchaseInfo.total_price = totalPrice;
  }, [totalPrice]);

  const handleNextStepButton = () => {
    const checkedCnt = [].slice
      .call(document.querySelectorAll(".reward_checkbox"))
      .filter(function (e) {
        return e.checked;
      }).length;
    if (checkedCnt === 0) {
      alert("최소 1개 이상의 리워드를 선택해주세요.");
      return;
    }

    const finalOptionLists = document.querySelectorAll(".reward_option_detail");
    for (let i = 0; i < finalOptionLists.length; i++) {
      if (finalOptionLists[i].value === "") {
        alert(
          "선택한 리워드 중 설정되지 않은 옵션이 있습니다.\n옵션을 설정한 후 다시 시도해 주세요."
        );
        return;
      }
    }
    console.log({ ...purchaseInfo });
    localStorage.setItem("purchaseInfo", JSON.stringify(purchaseInfo));
    navigator("/funding/pay");
    // window.location.href = "/funding/pay";
  };
  return (
    <>
      <div className="purchase_wrap">
        <PurchaseStep />

        <div className="reward_list">
          <ol>
            {rewardData.map((singleReward, singleRewardIndex) => (
              <RewardItem
                key={singleRewardIndex}
                singleReward={singleReward}
                singleRewardIndex={singleRewardIndex}
                purchaseInfo={purchaseInfo}
                setPurchaseInfo={setPurchaseInfo}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                project={project}
                setProject={setProject}
              />
            ))}
          </ol>
        </div>
        <p className="purchase_info">
          {project.project_name}에{" "}
          <span className="purchase_total_price">{totalPrice}</span>원을
          펀딩합니다.
        </p>
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            className="next_step_btn"
            onClick={handleNextStepButton}
          >
            다음 단계로
          </button>
        </div>
      </div>
    </>
  );
};

export default FundingReward;
