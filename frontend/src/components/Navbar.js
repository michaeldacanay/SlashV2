import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Slashnavbar.png";

const Navbar = ({ isAuthenticated }) => {
    return (
        <nav>
            <ul class="nav nav-pills">
                <li>
                    <img src={logo} alt="Slash Logo" />
                </li>
                <li className='nav-item'>
                    <Link to="/" class="nav-link">About</Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li className='nav-item active'>
                            <Link to="/search" class="nav-link">Search</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/profile" class="nav-link">Profile</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/wishlist" class="nav-link">Wishlist</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/searchHistory" class="nav-link">Search History</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/logout" class="nav-link">Log out</Link>
                        </li>
                    </>

                ) : (
                    <li className='nav-item'>
                        <Link to="/login" class="nav-link">Log in</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
