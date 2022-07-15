import React from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const RewardOption2 = ({item, i, rewardOptionRef, rewardOption, handleReward, setRewardOptionArr, 
  rewardOptionArr, addRewardOption, setRewardOption, 
  rewardOptionType, setRewardOptionType, rewardRef}) => {
  const onAdd = () => {
    addRewardOption();
  }

  const onAddRewardOption = (e) => {
    setRewardOption({
      ...rewardOption,
      [e.target.name] : e.target.value
    })
    console.log(rewardOption);
  }

  const delRewardOption = (i) => {
    console.log('delRewardOption.idx',i);
    console.log(rewardOptionArr);
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
    const index = i;
    newRewardOption = 
      newRewardOption.slice(0, index)
      .concat({
        ...newRewardOption[index],
        [e.target.name]: e.target.value})
      .concat(newRewardOption.slice(index + 1))
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
        rewardOptionLong:"",
        rewardOptionKeyword:"",
        rewardOptionShort:""})
      .concat(newRewardOption.slice(index + 1))
    setRewardOption(newRewardOption);
    console.log('rewardOption',rewardOption);
  }
  
  return (
    <div>
      <div className='reward_option' key={i}>
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
              <input className='reward_option_type1' name='rewardOptionLong'
              onChange={(e) => {
                handleOption(e,i);
              }}
              type='text' 
              // ref={(el) => (rewardRef.current[6] = el)}
              ref={(el) => (rewardOptionRef.current[0] = el)}
              placeholder='ex)옷의 사이즈를 적어주세요' />
              <input className='reward_option_type3' name='rewardOptionKeyword'
              onChange={(e) => {
                handleOption(e,i);
              }}
              type='text' 
              // ref={(el) => (rewardRef.current[7] = el)}
              ref={(el) => (rewardOptionRef.current[1] = el)}
              placeholder='키워드 입력 후 엔터를 눌러주세요.' />
              
            </div>}
            {rewardOptionType[i] === `단답형${i}`&&
            <input className='reward_option_type2' name='rewardOptionShort'
            onChange={(e) => {
              handleOption(e,i);
            }}
            type='text' 
            // ref={(el) => (rewardRef.current[8] = el)}
            ref={(el) => (rewardOptionRef.current[2] = el)}
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

export default RewardOption2;