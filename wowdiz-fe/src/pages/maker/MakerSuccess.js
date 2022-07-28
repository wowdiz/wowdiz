import React from 'react';
import { useNavigate } from 'react-router-dom';
import firework from '../../assets/images/util/firework.png';

const MakerSuccess = () => {
  const navi = useNavigate();
  return (
    <div>
      <div className='maker_success'>
        <img alt='' src={firework} />
        <p>프로젝트가 성공적으로 제출되었습니다. 심사 후 등록된 e-mail로 연락드리도록 하겠습니다. 감사합니다.</p>
        <div className='maker_success_btn'><div onClick={() => navi('/')}>메인으로 돌아가기</div></div>
      </div>
    </div>
  );
};

export default MakerSuccess;