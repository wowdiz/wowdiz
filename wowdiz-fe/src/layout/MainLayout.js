import React from 'react';
import Header from '../components/header/MainHeader';
import Footer from '../components/footer/Footer';
import {Outlet} from 'react-router-dom';

import "../style/main_layout.css";

const MainLayout = () => {
    return (
        <div className='wrap'>
            <div className='header_full'>
            <Header/>
            </div>
            <div className='content_wrap'>
                {/* 실제 컨텐츠가 바뀌는 영역 */}
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;