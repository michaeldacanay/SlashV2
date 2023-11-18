import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RequestModal from "./RequestModal.js";
import fx from 'money';

function DataDisplay() {
    const location = useLocation();
    const searchItem = location.state ? location.state.searchItem : null;
    const data = location.state ? location.state.response : null;
    const isModalOpen = location.state ? location.state.isModalOpen : null;
    const navigate = useNavigate();

    const [selectedCurrency, setSelectedCurrency] = useState('EUR');
    const handleCurrencyChange = (newCurrency) => {
        setSelectedCurrency(newCurrency);
    };

    const convertToDifferentCurrency = (price) => {
        // USD($)', 'EUR(€)', 'JPY(¥)', 'INR(₹)', 'GBP(£)', 'AUD($)', 'CAD($)
        fx.base = "USD"; // Adjust this based on your data
        fx.rates = {
            "USD": 1,
            "EUR": 0.92,
            "GBP": 0.8,
            "JPY": 149.54, // Example exchange rate for Japanese Yen
            "INR": 83.29,  // Example exchange rate for Indian Rupee
            "AUD": 1.54,   // Example exchange rate for Australian Dollar
            "CAD": 1.37,
            // Add more currencies as needed
        };
        // Check if both source and target currencies are defined in rates
        if (!fx.rates[fx.base]) {
            throw new Error("Invalid form currency codes");
        }
        if (!fx.rates["EUR"]) {
            throw new Error("Invalid to currency codes");
        }
        // console.log(typeof selectedCurrency);
        // console.log(typeof fx.rates.EUR);
        // console.log('Price before conversion:', price);
        // return fx(price).to(selectedCurrency);
        return fx(price).from("USD").to(selectedCurrency).toFixed(2);
    };

    const currencyDropdown = (
        <select value={selectedCurrency} onChange={(e) => handleCurrencyChange(e.target.value)}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
            <option value="JPY">JPY</option>
            <option value="INR">INR</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            {/* Add more currencies as needed */}
        </select>
    );


    const priceBodyTemplate = (rowData) => {
        const price_in_us = rowData.price;

        const priceAsInt = parseInt(price_in_us);
        const convertedPrice = convertToDifferentCurrency(priceAsInt);

        // console.log(priceAsInt)
        // const priceAsFloat = parseFloat(price_in_us);
        // const convertedPrice = convertToDifferentCurrency(priceAsFloat);
        return convertedPrice;
    };

    const HandleSubmission = async () => {
        try {
            navigate('/search')
        } catch (error) {
            console.log(error);
        }
    }

    if (data === null || (Array.isArray(data) && data.length === 0)) {
        console.log("here");
        return <RequestModal isOpen={true} searchItem={searchItem} />
    }

    const header = (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <h1>Product List</h1>
                {<Button bsclass="search-btn" style={{
                    backgroundColor: '#00AA9B',
                    color: 'white',
                    borderColor: '#00AA9B',
                }} onClick={HandleSubmission}>Back to Search</Button>}
            </div>
            <div>
                {currencyDropdown}
            </div>
        </div>
    );
    const footer = (
        <div>
            <p>Table End</p>
        </div>
    );

    const imageBodyTemplate = (rowData) => {
        const imageUrl = rowData.itemImageURl;
        return <img src={imageUrl} alt={rowData.name} style={{ width: '100px', height: '100px' }} />;
    };

    const urlBodyTemplate = (rowData) => {

        const linkUrl = new URL("https://" + rowData.itemURl);
        return <a href={linkUrl} target="_blank" rel="noopener noreferrer" >Link</a>;

    };

    return (

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            {data && data.length > 0 ? (
                <DataTable value={data}
                    header={header}
                    footer={footer}
                    showGridlines
                    tableStyle={{ width: '60rem' }}
                    paginator rows={10}
                    rowsPerPageOptions={[5, 10, 25, 50]}
                    removableSort
                >
                    <Column field="name" header="Product-Name" sortable />
                    <Column field="itemType" header="Category" sortable />
                    <Column header="Image" body={imageBodyTemplate} />
                    <Column field="store" header="Website" sortable />
                    <Column field="price" header="Price" sortable />
                    <Column header="Link" body={urlBodyTemplate} />
                    {/* <Column field="convertedPrice" header={`Price (${selectedCurrency})`} */}
                    <Column header={`Price (${selectedCurrency})`} body={priceBodyTemplate} sortable />
                </DataTable>
            ) : (
                <div>Sorry, couldn't find that item to compare.</div>
            )}
            <RequestModal isOpen={isModalOpen} searchItem={searchItem} />
        </div>
    );
};
export default DataDisplay;