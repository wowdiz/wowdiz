import React from 'react';
import PurchaseStep from '../../../components/funding/PurchaseStep';
import RewardItem from '../../../components/funding/RewardItem';
import "../../../style/reward_item.css";
import "../../../style/reset.css";

const FundingReward = () => {
    return (
        <div className='purchase_wrap'>
            <PurchaseStep/>

            <div className='reward_list'>
                {/* 부모에서 axios rewardItem을 list로 받아와
                각 rewarditem 컴포넌트로 각 데이터들을 props로
                보내주고 저장한 다음에,
                */}
                <RewardItem rewardCode={1}/>
                <RewardItem rewardCode={2}/>
                <RewardItem rewardCode={3}/>
                <RewardItem rewardCode={4}/>
                <RewardItem rewardCode={5}/>
                <RewardItem rewardCode={6}/>
            </div>
        </div>
    );
};

export default FundingReward;