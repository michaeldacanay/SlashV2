import React from "react";
import HomePage from "./HomePage";
import Search from "./SearchForm";
import DataDisplay from "./DataDisplay";

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
];
