import React, {useState, useEffect} from 'react';
import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import { useAuth0 } from '@auth0/auth0-react';
import Layout from './Layout.js';
import axios from "axios";
import {Button} from "react-bootstrap";

const Wishlist = () => {
    const { user, isAuthenticated } = useAuth0();

    const [list, setList] = useState([])



    useEffect(() => {
        const loadWishlist = async () => {
            const email = user.email;
            console.log(isAuthenticated);
            try {
                if (isAuthenticated) {
                    const response = await axios.post("http://localhost:8080/user/wishlist/", email, {
                        headers: {
                            'Content-Type': 'text/plain',
                        }
                    });
                    console.log(response.data);
                    setList(response.data);

                }
            } catch (error) {
                console.log(error);
            }
        }
        loadWishlist();
    }, [user, isAuthenticated])

    const imageBodyTemplate = (rowData) => {
        const imageUrl = rowData.itemImageURl;
        return <img src={imageUrl} alt={rowData.name} style={{ width: '100px', height: '100px' }} />;
    };

    const urlBodyTemplate = (rowData) => {

        const linkUrl = new URL("https://" + rowData.itemURl);
        return <a href={linkUrl} target="_blank" rel="noopener noreferrer" >Link</a>;

    };

    const deleteFromWishlist = async (itemUrl) => {
        try {
            const response = await axios.post("http://localhost:8080/user/deleteItem", {
                itemUrl: itemUrl,
                email: user.email,
            });
            setList(prevList => prevList.filter(item => item.itemURl !== itemUrl));
        } catch (error) {
            console.log(error);
        }
    }

    const deleteButton = (rowData) => {
        return <Button
            style={{
                backgroundColor: 'red',
                color: 'white',
                borderColor: 'red',
            }}
            onClick={() => deleteFromWishlist(rowData.itemURl)}>X
        </Button>
    }

    return (
        <div>
            <Layout isAuthenticated={isAuthenticated}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                        <DataTable value={list}

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
                            <Column header="Remove your Wishlist" body={deleteButton} />

                        </DataTable>


                </div>
            </Layout>
        </div>


    );
}

export default Wishlist;