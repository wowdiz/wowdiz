import React from 'react';
import Pie from '../../../components/chart/Pie';
import Bar from '../../../components/chart/Bar';
import BasicTable from '../../../components/table/BasicTable';
import '../../../style/admin_home.css';

const AdminHome = () => {
    const data = [
        {
            "id": "신규유입",
            "label": "신규유입",
            "value": 1390,
            "color": "hsl(287, 70%, 50%)"
            },
            {
            "id": "유령",
            "label": "유령",
            "value": 252,
            "color": "hsl(303, 70%, 50%)"
            },
            {
            "id": "탈퇴",
            "label": "탈퇴",
            "value": 52,
            "color": "hsl(239, 70%, 50%)"
        }
    ];

    const data2 = [
        {
            "id": "남자",
            "label": "남자",
            "value": 780,
            "color": "hsl(287, 70%, 50%)"
            },
            {
            "id": "여자",
            "label": "여자",
            "value": 800,
            "color": "hsl(303, 70%, 50%)"
        }
    ];

    const data3 = [
        {
            "country": "10대",
            "10대": 155,
            "10대Color": "hsl(35, 70%, 50%)",
        
        },
        {
            "country": "20대",
            "20대": 52,
            "burgerColor": "hsl(271, 70%, 50%)",
            
        },
        {
            "country": "30대",
            "30대": 87,
            "30대Color": "hsl(141, 70%, 50%)",
            
        },
        {
            "country": "40대",
            "40대": 155,
            "40대Color": "hsl(351, 70%, 50%)",
        
        },
        {
            "country": "50대",
            "50대": 151,
            "50대Color": "hsl(128, 70%, 50%)",
            
        },
        {
            "country": "60대",
            "60대": 49,
            "60대Color": "hsl(71, 70%, 50%)"
        }
    ];

    const title = {
        "title_0":"프로젝트 이름",
        "title_1":"목표금액",
        "title_2":"내 용",
        "title_3":"시작일",
        "title_4":"종료일"
    }
    
    const data4 = [
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
        <div className='admin_home'>
            <h3 style={{color:'#ACACAC'}}>회원관리</h3>
            <div className='home_chart'>
                <h4>&nbsp;&nbsp;&nbsp;전체 15,021명의 회원이 있습니다.(전일대비 : ↑5.11% / ↓0.64%)</h4>
                <div className='admin_home_box1'>
                    <Pie data={data} chartColor="dark2"/>
                    <h5>회원수 증감 현황(단위:월)</h5>
                </div>
                <div className='admin_home_box2'>
                    <Pie data={data2} chartColor="nivo"/>
                    <h5>회원 성 비율</h5>
                </div>
                <div className='admin_home_box3'>
                    <Bar data={data3} chartColor="nivo"/>
                    <h5>회원 연령별 분포도</h5>
                </div>
            </div>

            {/* <h3 style={{color:'#ACACAC'}}>승인대기중인 펀딩</h3>
            <div className='home_awaiting_list'>
                <BasicTable data={data4} title={title}/>
            </div> */}
        </div>
    );
};

export default AdminHome;