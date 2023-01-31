import React from 'react';

const Navbar = ({ currentPage, handlePageChange }) => {
    return (
        <div className='navbar'>
            <ul className='navlist'>
                <li className='nav-item'>
                    <a href='#intro' onClick={() => handlePageChange('Intro')}>Introduction</a>
                </li>
                <li className='nav-item'>
                    <a href='#notation' onClick={() => handlePageChange('Notation')}>Basic Music Notation</a>
                </li>
                <li className='nav-item'>
                    <a href='#rhythm' onClick={() => handlePageChange('Rhythm')}>Rhythm</a>
                </li>
                <li className='nav-item'>
                    <a href='#intervals' onClick={() => handlePageChange('Intervals')}>Intervals</a>
                </li>
                <li className='nav-item'>
                    <a href='#scales' onClick={() => handlePageChange('Scales')}>Scales</a>
                </li>
                <li className='nav-item'>
                    <a href='#chords' onClick={() => handlePageChange('Chords')}>Chords</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar