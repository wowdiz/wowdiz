import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_wrap'>
            <ul>
                <li><NavLink to='/'>wowdiz</NavLink></li>
                <li><NavLink to='/funding'>Funding</NavLink></li>
                <li><NavLink to='/login'>Login</NavLink></li>
                <li><NavLink to='/register'>Register</NavLink></li>
                <li><NavLink to='/mypage'>MyPage</NavLink></li>
            </ul>
        </div>
    );
};

export default Header;