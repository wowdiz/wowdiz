import React, { useState } from 'react';

const MakerOpenProjectForm3 = () => {
    const [possibility, setPossibility] = useState('무제한');
    const handleRadioBtn = (e) => {
        console.log(e.target.value);
        setPossibility(e.target.value);
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
                                    <input className='project_input' type="number"/>
                                </td>
                            </tr>
                            <tr>
                                <th>리워드 제공 가능수</th>
                                <td>
                                    <label className={possibility==='무제한'?'reward_label_radio_checked':'reward_label_radio'}
                                    htmlFor='id_reward_radio1'>
                                    <input className='reward_radio'
                                    type="radio" value="무제한" id='id_reward_radio1'
                                    checked={possibility === '무제한'}
                                    onChange={handleRadioBtn}/>무제한</label>
                                    <label className={possibility==='제한'?'reward_label_radio_checked':'reward_label_radio'}
                                    htmlFor='id_reward_radio2'>
                                    <input className='reward_radio'
                                    type="radio" value="제한" id='id_reward_radio2'
                                    checked={possibility === '제한'}
                                    onChange={handleRadioBtn}/>제한</label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                </div>
            </div>
        </div>
    );
};

export default MakerOpenProjectForm3;