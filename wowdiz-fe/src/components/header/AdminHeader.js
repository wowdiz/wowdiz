import React, { useEffect, useRef, useState } from 'react';
import '../../style/admin_layout.css';
import {NavLink, useNavigate} from 'react-router-dom';


const AdminHeader = () => {
    const [isHovering, setIsHovering] = useState(0);
    // const [top, setTop] = useState(0);
    const navi = useNavigate();

    const [ScrollY, setScrollY] = useState(0);

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

    return (
        <div className='admin_header_full'>
            <div className='admin_header_wrap'>
                <ul className='admin_header_menu'>
                    <li><NavLink to='/admin' className='admin_header_menu_link'>HOME</NavLink></li>
                    <li><NavLink to='/admin/member' className='admin_header_menu_link'>MEMBER</NavLink></li>
                    <label className='admin_header_funding_label'><li
                    onMouseOver={() => setIsHovering(1)} //onMouseIn, onMouseEnter, onMouseLeave ??
                    onMouseOut={() => setIsHovering(0)}
                    ><NavLink to='/admin/funding' className='admin_header_menu_link admin_menu_funding'
                    style={{cursor:'pointer'}}
                    >FUNDING</NavLink></li></label>
                    {isHovering===1?<div className='drop_admin_menu_funding'
                    onMouseOver={() => setIsHovering(1)}
                    onMouseOut={() => setIsHovering(0)}
                    ><span onClick={() => handleScroll(0)}>AWAITING</span>&nbsp; |&nbsp;
                    <span onClick={() => handleScroll(800)}>PROCEEDING</span>&nbsp; |&nbsp;
                    <span onClick={() => handleScroll(1580)}>FINISHED</span></div>:''}
                </ul>
                
                <ul className='admin_header_menu'>
                    <li className='admin_header_menu_link' style={{float:'right'}}>ADMIN</li>
                </ul>
            </div>
        </div>

    );
};

export default AdminHeader;