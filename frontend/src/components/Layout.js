import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown/dropdown.esm.js';
import Navbar from './Navbar.js';
import './custom.css';

const Layout = ({ children, isAuthenticated }) => {

    const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default background color is white
    const backgroundOptions = [
        { label: 'White', value: '#ffffff' },
        { label: 'Blue', value: '#3498db' },
        { label: 'Green', value: '#2ecc71' },
        { label: 'Yellow', value: '#f1c40f' },
        { label: 'Red', value: '#e74c3c' },
        // Add more color options as needed
    ];
    const onBackgroundColorChange = (e) => {
        setBackgroundColor(e.value);
        console.log('Background Color:', e.value);
    };
    return (
        <div style={{ backgroundColor }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Navbar isAuthenticated={isAuthenticated} />
                <div className="p-inputgroup" style={{ maxWidth: '150px' }}>
                    <span className="p-inputgroup-addon">
                        <i className="pi pi-palette" />
                    </span>
                    <Dropdown
                        value={backgroundColor}
                        options={backgroundOptions}
                        onChange={onBackgroundColorChange}
                        optionLabel="label"
                        placeholder="Select Background Color"
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default Layout;