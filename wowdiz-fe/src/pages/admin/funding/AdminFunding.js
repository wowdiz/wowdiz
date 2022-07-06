import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTable from '../../../components/table/BasicTable';
import '../../../style/admin_funding.css';

const AdminFunding = () => {
    const [ScrollY, setScrollY] = useState(0);
    const navi = useNavigate();

    const handleFollow = () => {
        setScrollY(window.pageYOffset);
    }

    function handleScroll(top) {  // 클릭하면 스크롤이 top만큼 이동하는 함수
        navi('/admin/funding');
        setTimeout(() => {
            window.scrollTo({
                top: top,
                behavior: "smooth"
            });
        },100);
    }


    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow)
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow)
        }
    })

    const title = {
        "title_0":"프로젝트 이름",
        "title_1":"목표금액",
        "title_2":"내 용",
        "title_3":"시작일",
        "title_4":"종료일"
    }

    const AwaitingData = [
        {
            "data_0": "Frozen yoghurt",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "lee",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "Frozen yoghurt",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "lee",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "Frozen yoghurt",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "lee",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "Frozen yoghurt",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "lee",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "Frozen yoghurt",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        },
        {
            "data_0": "lee",
            "data_1": "159",
            "data_2": "6.0",
            "data_3": "24",
            "data_4": "4.0"
        }
    ]

    return (
        <div className='admin_funding'>
            <h3 style={{color:'#ACACAC'}}>승인대기중인 펀딩
            </h3>
            <div className='funding_awaiting_list'>
                <BasicTable data={AwaitingData} title={title} />
            </div>
            <h3 style={{color:'#ACACAC',marginTop:'100px'}}>현재진행중인 펀딩
            <span className='funding_scroll_top' onClick={() => handleScroll(0)}>↑TOP</span>
            </h3>
            <div className='funding_proceeding_list'>
                <BasicTable data={AwaitingData} title={title} />
            </div>
            <h3 style={{color:'#ACACAC',marginTop:'100px'}}>완료된 펀딩
            <span className='funding_scroll_top' onClick={() => handleScroll(0)}>↑TOP</span>
            </h3>
            <div className='funding_finished_list'>
                <BasicTable data={AwaitingData} title={title} />
            </div>
        </div>
    );
};

export default AdminFunding;