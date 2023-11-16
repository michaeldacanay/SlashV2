import React from "react";
import HomePage from "./HomePage.js";
import Search from "./SearchForm.js";
import DataDisplay from "./DataDisplay.js";
import Login from "./Login.js";

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
    }
];
