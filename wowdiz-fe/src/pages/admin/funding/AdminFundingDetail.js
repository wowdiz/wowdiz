import React, { useEffect, useState } from 'react';
import AxiosService from '../../../service/AxiosService';
import '../../../style/admin_funding.css';
import Parcer from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

const AdminFundingDetail = () => {
    const navi = useNavigate();
    const { project_id }= useParams();
    const [data, setData] = useState(null);
    const [renderer, setRenderer] = useState(0);
    // let url = "/admin/projectData?project_id=" + project_id;
    
    const getList = () => {
        const url = "/admin/projectData?project_id=" + project_id;
        AxiosService.get(url)
        .then((res) => {
            console.log('ProjectDetailDatas',res.data);
            setData(res.data);
        })
    }

    console.log("data111111",data);
    console.log("params.project_id",project_id);

    useEffect(() => {
        getList();
    },[])

    const approveProject = () => {
        const url = "/admin/approveProject";
        AxiosService.post(url, data[0])
        .then(() => {
            console.log('성공');
            //미승인 => 승인처리
            navi("/admin/funding");
        })
    }

    return (
        <div className='admin_funding_awaiting_detail'>
            <h3 style={{color:'#ACACAC'}}>승인대기중인 펀딩</h3>
            <div className='admin_funding_awaiting_detail_form'>
            {
                data === null ? '' :
                <table className="admin_funding_awaiting_detail_form_table">
                    <tbody>
                        <tr>
                            <th>프로젝트 이름</th>
                            <td>{data[0].project_name}</td>
                            <td className='rowSeven' rowSpan='8'>
                                <img alt='' 
                                    src={"http://localhost:9150/save/" + data[0].project_thumbnail}
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>프로젝트 타입</th>
                            <td>reward</td>
                        </tr>
                        <tr>
                            <th>목표금액</th>
                            <td>{`₩${data[0].target_amount}`}</td>
                        </tr>
                        <tr>
                            <th>프로젝트 요약</th>
                            <td>{data[0].project_summary}</td>
                        </tr>
                        <tr>
                            <th>시작/종료 날짜</th>
                            <td>{data[0].open_date.substring(0, 10)} ~ {data[0].close_date.substring(0, 10)}</td>
                        </tr>
                        <tr>
                            <th>승인상태</th>
                            <td>
                                <div className=''>
                                    {
                                        data[0].approved === "Y" ? "승인됨 ("+ data[0].approved_date.substring(0, 10) + ")":
                                        "미승인"
                                    }
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>
                                {
                                    data[0].approved === "Y" ? 
                                    (<div className='approvalFinished' onClick={approveProject}>승인취소</div>) : 
                                    (<div className='approve' onClick={approveProject}>승인하기</div>)
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            }
            </div>
            <h3 style={{color:'#ACACAC', marginTop:'150px'}}>프로젝트 스토리</h3>
            {
                data === null ? '' : 
                <div className='admin_project_detail_project_story'>{Parcer(data[0].project_story)}</div>
            }
        </div>
    );
};

export default AdminFundingDetail;