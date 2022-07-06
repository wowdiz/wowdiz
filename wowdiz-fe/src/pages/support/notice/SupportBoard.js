import React from 'react';
import '../../../style/support_board.css';

const SupportBoard = () => {
    return (
        <div>
            <div className="support_home_layout">
                {/* 메뉴 선택시 변경되는 title text */}
                <div className="board_title">공지사항</div>
                    {/* 공지사항, 이벤트, FAQ, 1:1문의 네비게이션 바 */}
                    <div className="support_menu_navi">
                        {/* 네비게이션 버튼 */}
                        <span className="support_menu">공지사항</span>
                        {/* 네비게이션 버튼 구분자 */}
                        <span className="delimiter">|</span>
                        <span className="support_menu">이벤트</span>
                        <span className="delimiter">|</span>
                        <span className="support_menu">F A Q</span>
                        <span className="delimiter">|</span>
                        <span className="support_menu last">1:1 문의</span>
                    </div>
            </div>
        </div>
    );
};

export default SupportBoard;