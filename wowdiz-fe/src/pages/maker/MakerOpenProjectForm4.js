import React from 'react';

const MakerOpenProjectForm4 = () => {
    return (
        <div className='maker_open_project_form'>
            <div>
                <h3>환불 및 교환 정책을 적어주세요</h3>
                <p>리워드 안내에 노출됩니다.</p>
                <div className='reward_return_policy'>
                    <h3>진행자의 환불 및 교환 정책</h3>
                    <textarea placeholder='wowdiz 환불 및 교환정책 외에 추가사항이 있으시면 적어주세요.'></textarea>
                    <h3>문의 가능한 번호</h3>
                    <input className='project_input' />
                    <h3>문의 이메일</h3>
                    {/* user정보값 가져오면 좋을듯 */}
                    <input className='project_input' />
                    <div className='wowdiz_return_policy'>
                        <strong>wowdiz의 환불 및 교환 정책 기본사항</strong>
                        <ol>
                            <li>프로젝트 기간 중에는 자유롭게 마이 페이지에서 펀딩 취소가 가능합니다.</li>
                            <li>펀딩을 받아야만 생산을 시작할 수 있는 크라우드 펀딩 특성상, 프로젝트 종료 이후에는 단순 변심으로 인한 
                                교환이나 환불이 불가하니 이점 양해 부탉드립니다.</li>
                            <li>리워드 배송일이 예상보다 지연되는 경우, 새소식과 후원자 분들의 이메일을 통해 안내해드리겠습니다. 
                                이에관한 문의 이메일 "<span style={{color:'#ff0071'}}>user@email.com</span>", 
                                "연락처"로 연락바랍니다.</li>
                        </ol>
                    </div>
                    <ul>
                        <li>프로젝트 종료일 이후에 리워드와 관련된 환불 및 교환은 프로젝트 제작자가 약속하는 것에 따르며 wowdiz는 이에 책임지지 않습니다.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MakerOpenProjectForm4;