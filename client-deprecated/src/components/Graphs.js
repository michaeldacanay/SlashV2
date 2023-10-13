import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Pie, Line } from "react-chartjs-2";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, TextField } from "@mui/material";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, ArcElement, Tooltip, Legend);

/**
 * Generates graphs to better display the results of the products
 * @returns
 */
function Graphs() {
  const handleSubmission = () => {
    setButton("Fetching");
    const fetchVariety = async () => {
      const res = await fetch("http://localhost:8000/analysis/varietyCount/all/" + searchItem).then(response => {
        if (response.ok) {
          return response.json();
        }
      }).catch(err => {
        console.log(err)
      });
      const data = res;
      console.log(data);
      setPieData({
        labels: data.map((variety) => variety.website),
        datasets: [
          {
            label: "Variety of collections available",
            data: data.map((variety) => variety.count),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      });
      setButton("Fetched");
    };
    const fetchCosts = async () => {
      const res = await fetch("http://localhost:8000/analysis/topCost/all/" + searchItem).then(response => {
        if (response.ok) {
          return response.json();
        }
      }).catch(err => {
        console.log(err)
      });
      const data = res;
      console.log(data);
      setLineData({
        labels: data.map((costs) => costs.website),
        datasets: [
          {
            label: "Lowest price on each website",
            data: data.map((costs) => costs.lowest_price),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ]
          },
          {
            label: "Highest price on each website",
            data: data.map((costs) => costs.highest_price),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ]
          }
        ]
      });
      setButton("Fetched");
    };
    fetchVariety();
    fetchCosts();
  };

  const [pieData, setPieData] = useState(undefined);
  const [lineData, setLineData] = useState(undefined);
  const [button, setButton] = useState("Default");
  const [searchItem, setSearchItem] = useState(undefined);

  return (
    <div>
      <div style={{ display: "flex", marginLeft: "1vw", marginTop: "2vh" }}>
        {button === "Default" ? (
          <Stack direction="row" alignItems="center" spacing={2}>
            <TextField
              id="outlined-basic"
              label="Search Item"
              variant="outlined"
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <Button size="medium" variant="contained" color="secondary" onClick={handleSubmission}>
              Chart Results
            </Button>
          </Stack>
        ) : button === "Fetching" ? (
          <LoadingButton loading variant="outlined">
            Submit
          </LoadingButton>
        ) : (
          <div></div>
        )}
      </div>
      {pieData != undefined ? (
        <div style={{ display: "flex", width: "60vw", height: "80vh", marginBottom: "15vh", marginTop: "5vh" }}>
          <h2 style={{ margin: "auto", marginLeft: "3vw", marginRight: "3vw", marginBottom: "2vh" }}>
            {" "}
            Variety of {searchItem} available across websites{" "}
          </h2>
          <Pie
            data={pieData}
            options={{
              title: {
                display: true,
                text: "Variety of collections available",
                fontSize: 20
              },
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
      {lineData != undefined ? (
        <div style={{ display: "flex", width: "60vw", height: "80vh", marginBottom: "15vh", marginTop: "5vh" }}>
          <h2 style={{ margin: "auto", marginLeft: "3vw", marginRight: "3vw", marginBottom: "2vh" }}>
            {" "}
            Highest and lowest prices of {searchItem} on each website{" "}
          </h2>
          <Line
            data={lineData}
            options={{
              title: {
                display: true,
                text: "Highest and lowest prices on each website",
                fontSize: 20
              },
              responsive: true,
              maintainAspectRatio: false
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Graphs;
