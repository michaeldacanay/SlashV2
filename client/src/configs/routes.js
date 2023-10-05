import React from "react";
import Home from "../components/Home";
import HomeIcon from "@mui/icons-material/Home";
import Menu from "../components/Menu";
import Graphs from "../components/Graphs";
import Results from "../components/Results";
import SummarizeIcon from "@mui/icons-material/Summarize";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import InsightsIcon from "@mui/icons-material/Insights";

export const routes = [
  {
    path: "/",
    name: "Menu",
    element: <Menu />,
    icon: <SummarizeIcon />
  },
  {
    path: "/results",
    name: "Results",
    element: <Results />,
    icon: <EqualizerIcon />
  },
  {
    path: "/graphs",
    name: "Graphs",
    element: <Graphs />,
    icon: <InsightsIcon />
  }
];
