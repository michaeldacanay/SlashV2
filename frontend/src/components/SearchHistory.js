import React, {useState, useEffect} from 'react';
import { DataTable } from 'primereact/datatable/datatable.esm.js';
import { Column } from 'primereact/column/column.esm.js';
import 'primereact/resources/themes/saga-purple/theme.css'
import 'primereact/resources/primereact.min.css'
import { useAuth0 } from '@auth0/auth0-react';
import Layout from './Layout.js';
import axios from "axios";
import {Button} from "react-bootstrap";
import DataFetch from "./DataFetch.js";
import { useNavigate } from 'react-router-dom';
import './custom.css';

const SearchHistory = () => {
    const { user, isAuthenticated } = useAuth0();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [list, setList] = useState([])
    const [selectedSearch, setSelectedSearch] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const loadSearchHistory = async () => {
            const email = user.email;
            console.log(isAuthenticated);
            try {
                if (isAuthenticated) {
                    const response = await axios.post(`${apiUrl}/user/searchHistory`, email, {
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
        loadSearchHistory();
    }, [user, isAuthenticated])


    const deleteFromSearchHistory = async (rowData) => {
        console.log(rowData);
        try {
            const rowIndex = list.indexOf(rowData);
            const rowIndexAsString = String(rowIndex);
            await axios.post(`${apiUrl}/user/deleteSearch`, {
                search: rowIndexAsString,
                email: user.email,
            });
            setList(prevList => prevList.filter((item, index) => index !== rowIndex));
        } catch (error) {
            console.log(error);
        }
    }

    const deleteButton = (rowData) => {
        const buttonStyle = {
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'red',
        }
        
        return (
            <span className="pi pi-times" style={buttonStyle}
                onClick={() => deleteFromSearchHistory(rowData)}>
            </span>
        )
    }

    const goToSearch = async (rowData) => {
        try {

            const search = rowData;

            const result = await DataFetch("all", search);
            navigate("/data", { state: { response: result, searchItem: search, isModalOpen: false } });
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Layout isAuthenticated={isAuthenticated}>
            <div className="content" style={{ display: 'flex', justifyContent: 'center', padding: '100px'}}>
                <DataTable value={list}
                    stripedRows
                    showGridlines

                >
                    <Column
                        header="Search History"
                        className="search-column"
                        body={(rowData) => (
                            <div style={{fontSize: '1.2rem'}}
                                 onClick={() => goToSearch(rowData)}>
                                {rowData}
                            </div>
                            )}

                    />
                    <Column header="Clear" body={deleteButton} />
                </DataTable>
            </div>
        </Layout>



    );
}

export default SearchHistory;