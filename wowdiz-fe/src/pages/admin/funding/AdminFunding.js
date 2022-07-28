import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTable from '../../../components/table/BasicTable';
import AxiosService from '../../../service/AxiosService';
import '../../../style/admin_funding.css';
import AdminFundingTableRows from './AdminFundingTableRows';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

    const [awaitingList, setAwaitingList] = useState([]);
    const getAwaitingList = () => {
        const url = "/admin/awaitingList";
        AxiosService.get(url)
        .then((res) => {
            console.log('awaitingList',res.data);
            setAwaitingList(res.data);
        })
    }

    useEffect(() => {
        getAwaitingList();
    },[])

    const [onList, setOnList] = useState([]);
    const getOnList = () => {
        const url = "/admin/onList";
        AxiosService.get(url)
        .then((res) => {
            console.log('onList',res.data);
            setOnList(res.data);
        })
    }

    useEffect(() => {
        getOnList();
    },[])

    const [finishedList, setFinishedList] = useState([]);
    const getFinishedList = () => {
        const url = "/admin/finishedList";
        AxiosService.get(url)
        .then((res) => {
            console.log('finishedList',res.data);
            setFinishedList(res.data);
        })
    }

    useEffect(() => {
        getFinishedList();
    },[])

    return (
        <div className='admin_funding'>
            <h3 style={{color:'#ACACAC'}}>승인대기중인 펀딩</h3>
            <div className='funding_awaiting_list'>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell width="30px"><b style={{fontSize:'1.1rem'}}>번호</b></TableCell>
                            <TableCell align="left" width="150px"><b style={{fontSize:'1.1rem'}}>프로젝트 제목</b></TableCell>
                            <TableCell align="left" width="250px"><b style={{fontSize:'1.1rem'}}>요약내용</b></TableCell>
                            <TableCell align="left" width="80px"><b style={{fontSize:'1.1rem'}}>목표금액</b></TableCell>
                            <TableCell align="left" width="120px"><b style={{fontSize:'1.1rem'}}>종료일</b></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                awaitingList && awaitingList.map((item, idx) => (
                                    <AdminFundingTableRows item={item} key={item.project_id} idx={idx} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <h3 style={{color:'#ACACAC',marginTop:'100px'}}>현재진행중인 펀딩
            <span className='funding_scroll_top' onClick={() => handleScroll(0)}>↑TOP</span>
            </h3>
            <div className='funding_proceeding_list'>
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell width="30px"><b style={{fontSize:'1.1rem'}}>번호</b></TableCell>
                            <TableCell align="left" width="150px"><b style={{fontSize:'1.1rem'}}>프로젝트 제목</b></TableCell>
                            <TableCell align="left" width="250px"><b style={{fontSize:'1.1rem'}}>요약내용</b></TableCell>
                            <TableCell align="left" width="80px"><b style={{fontSize:'1.1rem'}}>목표금액</b></TableCell>
                            <TableCell align="left" width="120px"><b style={{fontSize:'1.1rem'}}>종료일</b></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                onList && onList.map((item, idx) => (
                                    <AdminFundingTableRows item={item} key={item.project_id} idx={idx} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <h3 style={{color:'#ACACAC',marginTop:'100px'}}>완료된 펀딩
            <span className='funding_scroll_top' onClick={() => handleScroll(0)}>↑TOP</span>
            </h3>
            <div className='funding_finished_list'>
            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell width="30px"><b style={{fontSize:'1.1rem'}}>번호</b></TableCell>
                            <TableCell align="left" width="150px"><b style={{fontSize:'1.1rem'}}>프로젝트 제목</b></TableCell>
                            <TableCell align="left" width="250px"><b style={{fontSize:'1.1rem'}}>요약내용</b></TableCell>
                            <TableCell align="left" width="80px"><b style={{fontSize:'1.1rem'}}>목표금액</b></TableCell>
                            <TableCell align="left" width="120px"><b style={{fontSize:'1.1rem'}}>종료일</b></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                finishedList && finishedList.map((item, idx) => (
                                    <AdminFundingTableRows item={item} key={item.project_id} idx={idx} />
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
};

export default AdminFunding;