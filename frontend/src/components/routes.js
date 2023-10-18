import React from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
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
        element: <SearchPage />,
    },
    {
        path: "/data",
        name: "Data",
        element: <DataDisplay />,
    },
];
