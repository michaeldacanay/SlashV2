import React from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";

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
];
