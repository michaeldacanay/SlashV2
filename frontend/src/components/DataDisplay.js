import React, {useEffect, useState} from 'react';
import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import RequestModal from "./RequestModal.js";

function DataDisplay() {
    const location = useLocation();
    const searchItem = location.state ? location.state.searchItem : null;
    const data = location.state ? location.state.response : null;
    const isModalOpen = location.state ? location.state.isModalOpen : null;
    const navigate = useNavigate();

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
        <div>
            <h1>Product List</h1>
            {<Button bsclass="search-btn" style={{
                backgroundColor: '#00AA9B',
                color: 'white',
                borderColor: '#00AA9B',
            }} onClick={HandleSubmission}>Back to Search</Button>}
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
                </DataTable>
            ) : (
                <div>Sorry, couldn't find that item to compare.</div>
            )}
            <RequestModal isOpen={isModalOpen} searchItem={searchItem} />
        </div>
    );
};
export default DataDisplay;