import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'


//example data: 
// {
//     "name": "HP Newest Flagship 15.6 HD Pavilion Lapt...",
//     "itemType": "laptops",
//     "itemURl": "www.amazon.com/sspa/click?ie=UTF8&spc=MTo1NjgzMDI2NzQ2MTcwNjUwOjE2OTcyMjM1MjI6c3BfYXRmOjMwMDA2MTE4NDAyMzQwMjo6MDo6&url=%2FHP-Flagship-Quad-Core-Conferencing-Accessory%2Fdp%2FB0CC2GD4D9%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dlaptops%26qid%3D1697223522%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
//     "itemImageURl": "www.amazon.com/sspa/click?ie=UTF8&spc=MTo1NjgzMDI2NzQ2MTcwNjUwOjE2OTcyMjM1MjI6c3BfYXRmOjMwMDA2MTE4NDAyMzQwMjo6MDo6&url=%2FHP-Flagship-Quad-Core-Conferencing-Accessory%2Fdp%2FB0CC2GD4D9%2Fref%3Dsr_1_1_sspa%3Fkeywords%3Dlaptops%26qid%3D1697223522%26sr%3D8-1-spons%26sp_csd%3Dd2lkZ2V0TmFtZT1zcF9hdGY%26psc%3D1",
//     "store": "amazon",
//     "price": "$469.00",
//     "discountPrice": "$469.00"
// }
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
    // return (
    //     <div>
    //         <h1>Data from the API:</h1>

    //         {data.map((item) => (
    //             <ul>
    //                 <li key={item.id}>{item.name}</li>
    //                 <li>{item.itemType}</li>
    //                 <li>{item.itemURl}</li>
    //                 <li>{item.itemImageURl}</li>
    //                 <li>{item.store}</li>
    //                 <li>{item.price}</li>
    //                 <li>{item.discountPrice}</li>
    //             </ul>

    //         ))}

    //     </div>
    // );
    return (
        <DataTable value={data}>
            <Column field="id" header="ID" />
            <Column field="name" header="Product-Name" />
            <Column field="itemtype" header="Category" />
            <Column field="itemurl" header="Link" />
            <Column field="imgurl" header="Image" />
            <Column field="store" header="Website" />
            <Column field="price" header="Price" />
            <Column field="dprice" header="Discounted Price" />
        </DataTable>
    );
};

export default DataDisplay;