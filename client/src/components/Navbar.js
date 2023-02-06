import React from 'react';

import { Link } from 'react-router-dom';

import Auth from '../utils/auth'

const Navbar = () => {
    return (
        <div className='navbar'>
            <ul className='navlist'>
                <li className='nav-item'>
                    <Link to='/notation'><p className='nav-link'>Music Notation</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/rhythm'><p className='nav-link'>Rhythm</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/intervals'><p className='nav-link'>Intervals</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/scales'><p className='nav-link'>Scales</p></Link>
                </li>
                <li className='nav-item'>
                    <Link to='/chords'><p className='nav-link'>Chords</p></Link>
                </li>
                {
                    Auth.loggedIn() ?
                    <li className='nav-item'>
                        <Link to='/profile'><p className='nav-link'>Profile</p></Link>
                    </li>
                    :
                    <li className='nav-item'>
                        <Link to='/login'><p className='nav-link'>Login</p></Link>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Navbar