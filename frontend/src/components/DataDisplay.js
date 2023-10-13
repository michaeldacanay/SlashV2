import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataDisplay = () => {
    const [data, setData] = useState([]);
    const apiUrl = process.env.REACT_APP_API_URL;
    useEffect(() => {
        // Fetch data from your API using Axios
        axios.get(`${apiUrl}/all`)
            .then((response) => setData(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    console.log(data)
    return (
        <div>
            <h1>Data from the API:</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataDisplay;