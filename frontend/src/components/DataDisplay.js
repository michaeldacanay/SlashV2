import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import './custom.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RequestModal from "./RequestModal.js";
import fx from 'money';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from './Layout.js';
import axios from "axios";
import { InputNumber } from 'primereact/inputnumber/inputnumber.esm.js';
import toast, { Toaster } from 'react-hot-toast';

import amazon_logo from "./logos/amazon_logo.png";
import bestbuy_logo from "./logos/Best_Buy_logo.png";
import costco_logo from "./logos/Costco-Logo.png";
import ebay_logo from "./logos/EBay_logo.png";
import target_logo from "./logos/Target_logo.png";
import walmart_logo from "./logos/Walmart_logo.png";

function DataDisplay() {
    const { isAuthenticated, user } = useAuth0();
    const location = useLocation();
    const searchItem = location.state ? location.state.searchItem : null;
    const data = location.state ? location.state.response : null;
    const isModalOpen = location.state ? location.state.isModalOpen : null;
    const apiUrl = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');

    const [globalFilter, setGlobalFilter] = useState('');

    const searchTerm = searchItem || '';

    const resultMessage = data
        ? `There are ${data.length} results for "${searchTerm}"`
        : '';

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

    const handleCurrencyChange = (newCurrency) => {
        setSelectedCurrency(newCurrency);
    };

    const convertToDifferentCurrency = (price) => {
        // USD($)', 'EUR(€)', 'JPY(¥)', 'INR(₹)', 'GBP(£)', 'AUD($)', 'CAD($)
        fx.base = "USD";
        fx.rates = {
            "USD": 1,
            "EUR": 0.92,
            "GBP": 0.8,
            "JPY": 149.54,
            "INR": 83.29,
            "AUD": 1.54,
            "CAD": 1.37,
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

    const currencyBodyTemplate = (rowData) => {
        const price_in_us = rowData.price;

        const priceAsInt = parseInt(price_in_us);
        const convertedPrice = convertToDifferentCurrency(priceAsInt);

        const formattedPrice = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: selectedCurrency,
        }).format(convertedPrice);

        return formattedPrice;
    };


    const priceBodyTemplate = (rowData) => {
        const price_in_us = rowData.price;
        const priceAsInt = parseInt(price_in_us);

        return priceAsInt.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const HandleSubmission = async () => {
        try {
            navigate('/search')
        } catch (error) {
            console.log(error);
        }
    }

    if (data === null || (Array.isArray(data) && data.length === 0)) {
        return <RequestModal isOpen={true} searchItem={searchItem} />
    }

    const header = (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <h1>Product List</h1>
                <p>{resultMessage}</p>
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

    const logoBodyTemplate = (rowData) => {
        const store = rowData.store.toLowerCase(); // Convert store name to lowercase for case-insensitive comparison

        // Map store names to corresponding logos
        const logoMap = {
            amazon: amazon_logo,
            walmart: walmart_logo,
            costco: costco_logo,
            bestbuy: bestbuy_logo,
            target: target_logo,
            ebay: ebay_logo,
        };

        // Check if the store name exists in the logoMap, if not, use a default logo
        const logoSource = logoMap[store] || 'default_logo_source.png';

        return <img src={logoSource} style={{ maxWidth: '100px', maxHeight: '100px' }} alt={store} />;
    };


    const urlBodyTemplate = (rowData) => {

        const linkUrl = new URL("https://" + rowData.itemURl);
        return <a href={linkUrl} target="_blank" rel="noopener noreferrer" >Link</a>;

    };

    const addButton = (rowData) => {
        const buttonStyle = {
            backgroundColor: '#00AA9B',
            color: 'white',
            borderColor: '#00AA9B',
            transition: 'background-color 0.3s ease-in-out', // Adding a transition for a smooth effect
        };

        const hoverStyle = {
            backgroundColor: '#007D73', // Change the background color on hover
        };

        return (
            <Button
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = hoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                onClick={() => addToWishlist(rowData.itemURl)}
            >
                +
            </Button>
        );
    };

    const addToWishlist = async (itemUrl) => {
        toast.success('Added to Wishlist successfully!');
        try {
            const response = await axios.post(`${apiUrl}/user/addItem`, {
                itemUrl: itemUrl,
                email: user.email,
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    const balanceFilterTemplate = (options) => {
        return <InputNumber value={options.value} onChange={(e) => options.filterCallback(e.value, options.index)} mode="currency" currency="USD" locale="en-US" />;
    };

    return (
        <div id="page-container">
            <Toaster />
            <Layout isAuthenticated={isAuthenticated}>
                <div style={{ marginLeft: '1em', marginRight: '1em' }}>
                    {data && data.length > 0 ? (
                        <DataTable value={data}
                            header={header}
                            footer={footer}
                            paginator rows={10}
                            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
                            className="custom-datatable"
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            removableSort
                            stripedRows
                            globalFilter={globalFilter}
                        >
                            <Column field="name" header="Product-Name" sortable filter />
                            <Column header="Image" body={imageBodyTemplate} />
                            <Column header="Website" body={logoBodyTemplate} sortable sortField="store" filter />

                            <Column field="price" header="Price"
                                filter filterField="price" filterElement={balanceFilterTemplate}
                                dataType="numeric" sortable sortField="price" body={priceBodyTemplate} />

                            <Column header="Link" body={urlBodyTemplate} />
                            <Column header={`Price (${selectedCurrency})`} body={currencyBodyTemplate} sortable sortField="price" />


                            {isAuthenticated ? (
                                <Column header="Add to your Wishlist" body={addButton} />
                            ) : null}
                        </DataTable>
                    ) : (
                        <RequestModal isOpen={isModalOpen} searchItem={searchItem} />
                    )}
                </div>
            </Layout>
        </div>
    );
}
export default DataDisplay;