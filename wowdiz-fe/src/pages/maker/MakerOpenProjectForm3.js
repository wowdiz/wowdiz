import React, { useState, useRef } from 'react';
import RegReward from './RegReward';
import RewardOption from './RewardOption';
import RewardOption2 from './RewardOption2';

const MakerOpenProjectForm3 = () => {
    const [possibility, setPossibility] = useState('무제한');
    const [necessity, setNecessity] = useState('necessary');
    const [rewardOptionType, setRewardOptionType] = useState(['선택형0']);

    const [subjectLengthChecker,setSubjectLengthChecker] = useState(0);
    const [contentLengthChecker, setContentLengthChecker] = useState(0);
    const [rewardOption, setRewardOption] = useState([]);
    const [rewardOptionArr, setRewardOptionArr] = useState([]);

    // const [reward, setReward] = useState([{
    //     rewardMoney:"",
    //     rewardPossibility:"",
    //     rewardQuantity:"",
    //     rewardSubject:"",
    //     rewardContent:"",
    //     deliveryDate:"",
    //     rewardOption:"",
    //     rewardOptionKeyword:"",
    //     rewardOptionShort:"",
    //     deliveryNecessity:""
    // }]);
    const [reward, setReward] = useState([{
        rewardMoney:"",
        rewardPossibility:"",
        rewardQuantity:"",
        rewardSubject:"",
        rewardContent:"",
        deliveryDate:"",
        rewardOption:rewardOption,
        deliveryNecessity:""
    }]);

    const [rewardArr, setRewardArr] = useState([]);

    const rewardRef = useRef([]);
    const rewardOptionRef = useRef([]);

    const handleReward = (e) => {
        setReward({
            ...reward,
            [e.target.name] : e.target.value
        })
    }

    const handleRewardSubjectLength = (e) => {
        setSubjectLengthChecker(e.target.value.length);
        setReward({
            ...reward,
            [e.target.name] : e.target.value
        });
    }

    const handleRewardContentLength = (e) => {
        setContentLengthChecker(e.target.value.length);
        setReward({
            ...reward,
            [e.target.name] : e.target.value
        });
    }

    const handleRadioPossibility = (e) => {
        setPossibility(e.target.value);
        setReward({
            ...reward,
            [e.target.name] : e.target.value
        });
    }
    const handleRadioNecessity = (e) => {
        setNecessity(e.target.value);
    }

    const addReward = () => {
        setReward({
            ...reward,
            rewardOption : rewardOption
        });
        setTimeout(() => {setRewardArr(rewardArr.concat(reward));},2500);
        console.log('rewardArr',rewardArr);
    }

    const delReward = (idx) => {
        setRewardArr(rewardArr.filter((data,index) => idx !== index));
    }

    const addRewardOption = () => {
        // let newOptionArr = [...rewardOptionArr];
        // let newOption = rewardOptionArr.slice(-1)[0];
        // newOption += 1;
        // newOptionArr.push(newOption);
        // setRewardOptionArr(newOptionArr);
        setRewardOption(rewardOption.concat({
            rewardOptionLong:"",
            rewardOptionKeyword:"",
            rewardOptionShort:""
        }))
        setRewardOptionArr(rewardOptionArr.concat([rewardOption]));
        setRewardOptionType(rewardOptionType.concat([`선택형${rewardOptionType.length}`]));
    }

    const delRewardOption = (idx) => {
        console.log(idx);
        setRewardOptionArr(rewardOptionArr.filter((data,index) => idx !== index));
    }

    const onResetReward = () => {
    }

    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>프로젝트 리워드를 구성해주세요</h3>
                <p style={{color:'gray'}}>프로젝트 시작을 위해서는 
                <span className='target_money'>최소 1개 이상의 리워드가 있어야 합니다.</span>
                배송이 필요한 리워드는 배송비가 포함된 가격을 적어주세요.</p>
                <div className='reward_wrap'>
                    <table>
                        <tbody>
                            <tr>
                                <th>리워드 금액</th>
                                <td>
                                    <input className='project_input' name='rewardMoney'
                                    type="number" onChange={handleReward}
                                    ref={(el) => (rewardRef.current[0] = el)}/>
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 제공 가능수</th>
                                <td>
                                    <label className={possibility==='무제한'?'reward_label_radio_checked':'reward_label_radio'}
                                    htmlFor='id_reward_radio1'>
                                    <input className='reward_radio' name='rewardPossibility'
                                    type="radio" value="무제한" id='id_reward_radio1'
                                    checked={possibility === '무제한'}
                                    onChange={handleRadioPossibility}
                                    ref={(el) => (rewardRef.current[1] = el)}/>무제한</label>
                                    <label className={possibility==='제한'?'reward_label_radio_checked':'reward_label_radio'}
                                    htmlFor='id_reward_radio2'>
                                    <input className='reward_radio' name='rewardPossibility'
                                    type="radio" value="제한" id='id_reward_radio2'
                                    checked={possibility === '제한'}
                                    onChange={handleRadioPossibility}/>제한</label>
                                    <input className='select_reward_quantity' name='rewardQuantity'
                                    type={possibility==='제한'?'number':'hidden'}
                                    defaultValue='0' onChange={handleReward}
                                    ref={(el) => (rewardRef.current[2] = el)}/>
                                    {possibility==='제한'?<span style={{color:'gray'}}>&nbsp;개</span>:''}
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 제목</th>
                                <td>
                                    <input className='project_input' name='rewardSubject'
                                    type="text" maxLength={30}
                                    onChange={handleRewardSubjectLength}
                                    ref={(el) => (rewardRef.current[3] = el)}/>
                                    <span style={{color:'gray'}}>&nbsp;{subjectLengthChecker}/30</span>
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 내용</th>
                                <td>
                                    <textarea className='reward_content' name='rewardContent'
                                    maxLength={70}
                                    type="text" placeholder='준비된 리워드와 설명을 적어주세요'
                                    onChange={handleRewardContentLength}
                                    ref={(el) => (rewardRef.current[4] = el)}/>
                                    <span style={{color:'gray'}}>&nbsp;{contentLengthChecker}/70</span>
                                </td>
                            </tr>
                            <tr>
                                <th>예상 배송일</th>
                                <td>
                                    <input className='project_input' name='deliveryDate'
                                    type="date" onChange={handleReward}
                                    ref={(el) => (rewardRef.current[5] = el)}/>
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 옵션</th>
                                <td>
                                    {/* <RewardOption
                                    rewardOptionRef={rewardOptionRef}
                                    rewardOptionArr={rewardOptionArr}
                                    rewardOptionType={rewardOptionType}
                                    rewardOption={rewardOption}
                                    setRewardOption={setRewardOption}
                                    setRewardOptionType={setRewardOptionType}
                                    rewardRef={rewardRef}
                                    addRewardOption={addRewardOption}
                                    handleReward={handleReward}
                                    delRewardOption={delRewardOption} 
                                    setRewardOptionArr={setRewardOptionArr}/> */}
                                    {rewardOptionArr.length===0?<div className='project_input reward_option_btn'
                                    type="button" style={{marginBottom: '0px'}} onClick={addRewardOption}>리워드 옵션 추가하기</div>:''}
                                    {
                                        rewardOptionArr && rewardOptionArr.map((item, idx) => (
                                            <RewardOption2 
                                                item={item}
                                                i={idx}
                                                rewardOptionRef={rewardOptionRef}
                                                rewardOptionArr={rewardOptionArr}
                                                rewardOptionType={rewardOptionType}
                                                rewardOption={rewardOption}
                                                setRewardOption={setRewardOption}
                                                setRewardOptionType={setRewardOptionType}
                                                rewardRef={rewardRef}
                                                addRewardOption={addRewardOption}
                                                handleReward={handleReward}
                                                delRewardOption={delRewardOption} 
                                                setRewardOptionArr={setRewardOptionArr}
                                            />
                                        ))
                                    }
                                </td>
                            </tr>
                            <tr>
                                <th>배송지 필요여부</th>
                                <td>
                                    <label className={necessity==='necessary'?'reward_label_radio_checked':'reward_label_radio'}
                                    htmlFor='id_reward_radio3'>
                                    <input className='reward_radio' name='deliveryNecessity'
                                    type="radio" value="necessary" id='id_reward_radio3'
                                    checked={necessity === 'necessary'}
                                    onChange={handleRadioNecessity}
                                    ref={(el) => (rewardRef.current[9] = el)}/>배송지 필요</label>
                                    <label className={necessity==='unnecessary'?'reward_label_radio_checked':'reward_label_radio'}
                                    htmlFor='id_reward_radio4'>
                                    <input className='reward_radio' name='deliveryNecessity'
                                    type="radio" value="unnecessary" id='id_reward_radio4'
                                    checked={necessity === 'unnecessary'}
                                    onChange={handleRadioNecessity}
                                    ref={(el) => (rewardRef.current[9] = el)}/>배송지 필요없음</label>
                                </td>
                            </tr>
                        </tbody>
                    </table><br/>
                    <hr style={{border:'0.3px solid #ebebeb'}}/>
                    <button className='reward_btn_reg' type='button' onClick={addReward}>등록</button>
                    <button className='reward_btn_reset' type='button' onClick={onResetReward}>초기화</button>
                </div>
            </div>

            <div>
                <h3>등록된 리워드 미리보기</h3>
                {rewardArr.length===0 ? <p style={{color:'gray'}}>리워드가 없습니다. 리워드를 추가해주세요.</p> : ''}
                {
                    rewardArr && rewardArr.map((item, idx) => (
                        <RegReward data={item} key={idx} idx={idx} onDelete={delReward}/>
                    ))
                }
                

            </div>
        </div>
    );
};

export default MakerOpenProjectForm3;