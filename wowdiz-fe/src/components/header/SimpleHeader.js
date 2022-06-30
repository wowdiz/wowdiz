import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='header_wrap'>
            <NavLink to='/'>wowdiz</NavLink>
        </div>
    );
};

export default Header;