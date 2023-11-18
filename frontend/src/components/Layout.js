import React from 'react';
import Navbar from './Navbar.js';

const Layout = ({ children, isAuthenticated }) => {
    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} />
            <div>{children}</div>
        </div>
    );
};

export default Layout;