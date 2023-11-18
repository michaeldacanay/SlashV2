import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">About</Link>
                </li>
                {isAuthenticated ? (
                    <>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/profile">Profile</Link>
                        </li>
                        <li>
                            <Link to="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                            <Link to="/logout">Log out</Link>
                        </li>
                    </>

                ) : (
                    <li>
                        <Link to="/login">Log in</Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
