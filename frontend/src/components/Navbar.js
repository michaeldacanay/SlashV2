import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import logo from "../Slashnavbar.png";
import { Menubar } from "primereact/menubar/menubar.esm.js";
import 'primeicons/primeicons.css';
import './custom.css';

const Navbar = ({ isAuthenticated }) => {
    const navigate = useNavigate();

    const loggedInMenu = [
        { label: 'About', icon: 'pi pi-info-circle', command:()=> navigate("/"), style: { textDecoration: 'none', color: 'black' } },
        { label: 'Profile', icon: 'pi pi-user', command:()=> navigate("/profile") },
        { label: 'Search', icon: 'pi pi-search', command:()=> navigate("/search") },
        { label: 'Search History', icon: 'pi pi-history', command:() => navigate("/searchHistory") },
        { label: 'Wishlist', icon: 'pi pi-heart', command:()=> navigate("/wishlist") },
        { label: 'Log Out', icon: 'pi pi-sign-out', command:()=> navigate("/logout") },
    ];

    const loggedOutMenu = [
        { label: 'About', icon: 'pi pi-info-circle', command:() => navigate("/") },
        { label: 'Log In', icon: 'pi pi-sign-in', command:() => navigate("/login") },
    ];

    const menu = isAuthenticated ? loggedInMenu : loggedOutMenu;


    return (
        <div>
            <img src={logo} alt="Slash Logo" style={{display: 'inline-block', verticalAlign: 'top'}} />
            <Menubar
                model={menu}
                menuIcon={logo}


            />

        </div>

    );
};

export default Navbar;
