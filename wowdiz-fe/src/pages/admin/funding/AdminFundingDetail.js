import React from 'react';
import '../../../style/admin_funding.css';

const AdminFundingDetail = () => {
    return (
        <div className='admin_funding_awaiting_detail'>
            <div className='admin_funding_awaiting_detail_form'>
                <table className="admin_funding_awaiting_detail_form_table">
                    <tr>
                        <th>프로젝트 이름</th>
                        <td>반응형 스트랩 조명</td>
                        <td className='rowSeven' rowSpan='7'>11</td>
                    </tr>
                    <tr>
                        <th>프로젝트 타입</th>
                        <td>reward</td>
                    </tr>
                    <tr>
                        <th>목표금액</th>
                        <td>₩3,000,000,000</td>
                    </tr>
                    <tr>
                        <th>프로젝트 요약</th>
                        <td>게임/영화·드라마/음악의 몰입도를 극한까지 끌어올릴 스트랩 조명, 풀세트 20만 원대로 가격까지 극한으로 낮췄습니다.</td>
                    </tr>
                    <tr>
                        <th>시작/종료 날짜</th>
                        <td>2022년 8월 1일 ~ 2022년 10월 2일</td>
                    </tr>
                    <tr>
                        <th>발송 예정일</th>
                        <td>2022년 11월 1일</td>
                    </tr>
                    <tr>
                        <th>승인여부</th>
                        <td>
                            <select>
                                <option>승인대기중</option>
                                <option>승인하기</option>
                            </select>
                            <button>저장</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

export default AdminFundingDetail;