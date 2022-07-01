import React from 'react';
import '../../style/admin_layout.css';
import {NavLink} from 'react-router-dom';

const AdminHeader = () => {
    return (
        <div className='admin_header_wrap'>
            <ul className='admin_header_menu'>
                <li><NavLink to='/admin' className='admin_header_menu_link'>HOME</NavLink></li>
                <li><NavLink to='/admin/member' className='admin_header_menu_link'>MEMBER</NavLink></li>
                <li><NavLink to='/admin/funding' className='admin_header_menu_link'>FUNDING</NavLink></li>
            </ul>
            <ul>
                <li className='admin_header_menu_link' style={{float:'right'}}>ADMIN</li>
            </ul>
        </div>
    );
};

export default AdminHeader;