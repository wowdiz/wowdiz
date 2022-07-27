import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

const RewardOption = ({
  isHovering, setIsHovering,
  reward, setReward, i, rewardOptionRef, rewardOption,setRewardOptionArr, 
  rewardOptionArr, addRewardOption, setRewardOption, 
  rewardOptionType, setRewardOptionType}) => {
  const onAdd = () => {
    addRewardOption();
  }

  const addReward = () => {
    setReward({
      ...reward,
      rewardOptions : rewardOption
    });
  }

  const delRewardOption = (i) => {
    setRewardOptionArr(rewardOptionArr.filter((data,index) => i !== index));
  }

  const handleType = (e, i) => {
    let newRewardOptionType = rewardOptionType;
    newRewardOptionType = [
      ...newRewardOptionType.slice(0, i),
      e.target.value,
      ...newRewardOptionType.slice(i + 1)
    ]
    setRewardOptionType(newRewardOptionType);
  }

  const handleOption = (e, i) => {
    let newRewardOption = rewardOption;
    newRewardOption = 
      newRewardOption.slice(0, i)
      .concat({
        ...newRewardOption[i],
        [e.target.name]: e.target.value,
        project_reward_option_type: rewardOptionType[i]})
      .concat(newRewardOption.slice(i + 1))
    setRewardOption(newRewardOption);
    console.log('rewardOption',rewardOption);
  }

  const handleOptionReset = (i) => {
    let newRewardOption = rewardOption;
    const index = i;
    newRewardOption = 
      newRewardOption.slice(0, index)
      .concat({
        ...newRewardOption[index],
        project_reward_option_name:"",
        project_reward_option_detail:"",
        project_reward_option_type: rewardOptionType[i]})
      .concat(newRewardOption.slice(index + 1))
    setRewardOption(newRewardOption);
    console.log('rewardOption',rewardOption);
  }
  return (
    <div>
      <div className='reward_option' key={i} style={{marginBottom: '-70px'}}>
          <p style={{color:'gray'}}>옵션선택 #{i+1}</p>
          <div style={{marginBottom: '20px'}}>
            <label className={rewardOptionType[i]===`선택형${i}`?'reward_label_radio_checked':'reward_label_radio'}
            htmlFor={`id_reward_option_radio${i}`}>
            <input className='reward_radio'
            type="radio" value={`선택형${i}`} id={`id_reward_option_radio${i}`}
            checked={rewardOptionType[i] === `선택형${i}`}
            onChange={(e) => {
              handleType(e, i);
              handleOptionReset(i);
              }}/>선택형</label>
            <label className={rewardOptionType[i]===`단답형${i}`?'reward_label_radio_checked':'reward_label_radio'}
            htmlFor={`id_reward_option_radio2${i}`}>
            <input className='reward_radio'
            type="radio" value={`단답형${i}`} id={`id_reward_option_radio2${i}`}
            checked={rewardOptionType[i] === `단답형${i}`}
            onChange={(e) => {
              handleType(e, i);
              handleOptionReset(i);
            }}/>단답형</label>
            <br/>

            {rewardOptionType[i] === `선택형${i}`&&
            <div style={{marginBottom: '0px'}}>
              <input className='reward_option_type1' name='project_reward_option_name'
              onChange={(e) => {
                handleOption(e,i);
              }}
              onBlur={addReward}
              type='text' 
              ref={(el) => (rewardOptionRef.current[i] = el)}
              placeholder='ex)옷의 사이즈를 적어주세요' />


              <input className='reward_option_type3' name='project_reward_option_detail'
              onChange={(e) => {
                handleOption(e,i);
              }}
              onBlur={addReward}
              type='text' 
              ref={(el) => (rewardOptionRef.current[i+100] = el)}
              placeholder='옵션 키워드를 ","로 구분하여 적어주세요.'
              value={
                rewardOption.rewardOptionKeyword && rewardOption.rewardOptionKeyword.split(',').map((data,idx) => (
                  <span className='keyword' key={idx}>
                  {data}&nbsp;
                  <ClearIcon className='delIcon'
                  style={isHovering===idx+1 ? {fontSize:'12px',backgroundColor:'#55a7ff'}:{fontSize:'12px'}}
                  onMouseOver={() => setIsHovering(idx+1)}
                  onMouseOut={() => setIsHovering(0)}
                  />
              </span>
                  ))
              } />
            </div>}
            {rewardOptionType[i] === `단답형${i}`&&
            <input className='reward_option_type2' name='project_reward_option_name'
            onChange={(e) => {
              handleOption(e,i);
            }}
            onBlur={addReward}
            type='text' 
            ref={(el) => (rewardOptionRef.current[i] = el)}
            placeholder='ex)옷의 사이즈를 적어주세요' />}
            <div className='reward_preview_btn' style={{marginBottom: '0px',display:'block'}}>
              {rewardOptionArr.length===(i+1) && 
                <label className='reward_preview_btn_necessity' style={{color:'#002fa3'}}
                onClick={onAdd}>
                  <AddCircleOutlineIcon />옵션추가
                </label>}
                <label className='reward_preview_btn_update' style={{color:'#ff0071'}}
                onClick={() => {
                  console.log(i);
                  delRewardOption(i);
                }}>
                  <RemoveCircleOutlineIcon />옵션삭제
                </label>
              </div>
          </div>
        </div>
    </div>
  );
};

export default RewardOption;