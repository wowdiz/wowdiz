import React from 'react';
import '../../../style/admin_member.css'
import BasicTable from '../../../components/table/BasicTable';

const AdminMember = () => {
    const title = {
        "title_0":"이름",
        "title_1":"아이디",
        "title_2":"펀딩횟수",
        "title_3":"게시글수",
        "title_4":"댓글수",
        "title_5":"상태",
        "title_6":"가입일"
    }

    const memberData = [
        {
            "data_0": "김지원",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0",
            "data_5":"ban",
            "data_6":"22-07-01"
        }
    ]
    
    return (
        <div className='admin_member'>
            <h3 style={{color:'#ACACAC'}}>회원관리</h3>
            <div className='member_list'>
                <BasicTable data={memberData} title={title} />
            </div>
        </div>
    );
};

export default AdminMember;