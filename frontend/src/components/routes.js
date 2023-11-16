import React from "react";
import HomePage from "./HomePage.js";
import Search from "./SearchForm.js";
import DataDisplay from "./DataDisplay.js";
import Login from "./Login.js";
import Profile from "./Profile.js";
import Logout from "./Logout.js";

export const routes = [
    {
        path: "/",
        name: "Home",
        element: <HomePage />,
    },
    {
        path: "/search",
        name: "Search",
        element: <Search />,
    },
    {
        path: "/data",
        name: "Data",
        element: <DataDisplay />,
    },
    {
        path: "/login",
        name: "Login",
        element: <Login />
    },
    {
        path: "/logout",
        name: "Logout",
        element: <Logout />
    },
    {
        path: "/profile",
        name: "Profile",
        element: <Profile />
    }
];
