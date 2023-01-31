import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = ({ currentPage, handlePageChange }) => {
    <header>
        <h1 className='heading'>
            <a href='#home' onClick={() => handlePageChange('Home')}>Music Theory Manual</a>
        </h1>
    </header>
}

export default Header