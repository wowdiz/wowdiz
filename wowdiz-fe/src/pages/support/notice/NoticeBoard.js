import React from 'react';
import '../../../style/notice_board.css';
import Pagination from '@mui/material/Pagination';

const NoticeBoard = () => {
    return (
        <div>
            <div class="support_home_layout">
                    <div class="support_menu_backgroundcolor"></div>
                    <div class="support_menu_navi"></div>
                    <span class="support_menu_title">공지사항</span>
                    <span class="support_menu_left">공지사항</span>
                    <span class="support_menu_center">F A Q</span>
                    <span class="support_menu_right">1:1 문의</span>
                    <div class="support_left_menu_bar"></div>
                    <div class="support_right_menu_bar"></div>
            </div>
        </div>
    );
};

export default NoticeBoard;