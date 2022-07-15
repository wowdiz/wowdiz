import React, {useState} from 'react';


const RewardItem = (props) => {
    const[checkReward, setCheckReward] = useState(false);
    const[qty, setQty] = useState(0);
    console.log(qty);
    const handleCheckReward = () => {
        setCheckReward(!checkReward);
        console.log(checkReward)

    }

    const handleOnChangeQty = (e) => {
        let tmp = Number.parseInt(e.target.value);
        if(tmp<=0){
            alert("0보다 작음")
            return
        }
    }

    const handleDecreaseBtn = () => {
        if(qty<=0)
            return;
        
            setQty((qty) => Number.parseInt(qty)-1)
        }

    const handleIncreaseBtn = () => {
        // 제한수량 이상은 못 늘어나게 유효성 필요.
        const limit = 100;

        if(qty>limit)
            return

        setQty((qty) => Number.parseInt(qty)+1)
    }

    return (
        <li>
            <div className='reward_box'>
                <div className='left'>
                    <input type={'checkbox'} onClick={handleCheckReward}/>
                </div>
                <div className='right'>
                    <h4>30,000원 펀딩합니다.</h4>
                    <p className='reward_title'>[슈퍼 얼리버드3] 깐부팩 5박스 (25개) (83개 남음)
                    ★25,000(39%) 혜택★ 넛츠그린 초코볼 5박스를 옵션에 따라 다양하게 즐겨보세요!
                    배송비 3,000원 | 리워드 제공 예상일 : 2022년 08월 초 (1~10일) 예정</p>
                    {checkReward && 
                    <div className='reward_detail'>
                        <div className='reward_amont'>
                            <lable htmlFor="count">수량:</lable>
                            <button type="button" name="decrease_btn" onClick={handleDecreaseBtn}>-</button>
                                <input type={'input'} name="count" value={qty} onChange={handleOnChangeQty} />    
                            <button type="button" name="increase_btn" onClick={handleIncreaseBtn}>+</button>
                        </div>
                        <div className='reward_option'>
                            <lable htmlFor="count">옵션:</lable>
                                <input type={'input'} name="option_detail"></input>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </li>
    );
};

export default RewardItem;