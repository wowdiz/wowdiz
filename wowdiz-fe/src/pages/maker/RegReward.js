import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

const RegReward = ({data, onDelete, idx}) => {
  const delRewardArr = () => {
    onDelete(idx);
  }
  return (
    <div className='reward_preview_wrap'>
      <div className='reward_preview'>
        <h3>{data.reward_price}</h3>
        <h3 className='reward_preview_possibility'>{data.rewardPossibility}</h3>
        <span style={{color:'gray',fontWeight:'bold'}}>리워드명</span><br/>
        <span style={{fontWeight:'bold'}}>{data.project_reward_title}</span>
        <p className='reward_preview_content'>{data.project_reward_info}</p>
        <span style={{color:'gray',fontWeight:'bold'}}>예상 배송일</span><br/>
        <span style={{fontWeight:'bold'}}>{data.project_delivery_date}</span>
        <hr className='reward_preview_line'/>

        {data.rewardOptions && data.rewardOptions.map((item, idx) => (
        <div key={idx} style={{marginBottom: '25px'}}>
          {item.project_reward_option_detail &&
          <div style={{marginBottom: '25px'}}>
            <span style={{color:'gray',fontWeight:'bold'}}>{item.project_reward_option_name}</span><br/>
            <select className='reward_preview_selector'>
              {item.project_reward_option_detail && item.project_reward_option_detail.split(',').map((d,i) => (
                <option key={i}>{d}</option>
              ))}
            </select>
          </div>}
          {!item.project_reward_option_detail &&
          <div style={{marginBottom: '25px'}}>
            <span style={{color:'gray',fontWeight:'bold'}}>{item.project_reward_option_name}</span><br/>
            <input className='reward_preview_short_answer' type='text' value='직접 입력하세요.' disabled='disabled'/>
          </div>}
        </div>
        ))}

        <hr className='reward_preview_line'/>

        <div className='reward_preview_btn' style={{marginBottom: '0px',display:'block'}}>
        <label className='reward_preview_btn_necessity' style={{color:'#002fa3'}}>
          <AccessAlarmIcon />{data.project_require_parcel==='Y'?<span>배송지 필요</span>:<span>배송지 필요없음</span>}
        </label>
        <label className='reward_preview_btn_delete' style={{color:'#ff0071'}} onClick={() => delRewardArr(idx)}>
          <DeleteForeverIcon /><span>삭제</span>
        </label>
        </div>
      </div>
    </div>
  );
};

export default RegReward;