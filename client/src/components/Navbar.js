import React from 'react';

import { Link } from 'react-router-dom';

import Auth from '../utils/auth'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navlist'>
                <li className='nav-item'>
                    <Link to='/intro'>Introduction</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/notation'>Music Notation</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/rhythm'>Rhythm</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/intervals'>Intervals</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/scales'>Scales</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/chords'>Chords</Link>
                </li>
                {
                    Auth.loggedIn() ?
                    <div className='loggedIn'>
                        <li className='nav-item'>
                            <Link to='/profile'>Profile</Link>
                        </li>
                    </div>
                    :
                    <div className='loggedOut'>
                        <li className='nav-item'>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/signup'>Sign Up</Link>
                        </li>
                    </div>
                }
            </ul>
        </div>
    )
}

export default Navbar