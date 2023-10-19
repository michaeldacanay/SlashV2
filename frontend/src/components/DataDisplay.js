import React, { useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function DataDisplay() {
    const location = useLocation();
    const data = location.state ? location.state.response : null;
    console.log(data)
    const navigate = useNavigate();
    const HandleSubmission = async () => {
        try {
            navigate('/search')
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (data === null || (Array.isArray(data) && data.length === 0)) {
            window.alert('Data couldn\'t be found in the database.');
            navigate('/search')
        }
    }, [data, navigate]);

    if (data === null) {
        return null; // Return null to prevent rendering any content if data is null
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
        const linkUrl = "https://" + rowData.itemURl;
        console.log(linkUrl)
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
        </div>
    );
};
export default DataDisplay;