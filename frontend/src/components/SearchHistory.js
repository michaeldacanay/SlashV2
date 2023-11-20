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

const SearchHistory = () => {
    const { user, isAuthenticated } = useAuth0();

    const [list, setList] = useState([])

    const navigate = useNavigate();



    useEffect(() => {
        const loadSearchHistory = async () => {
            const email = user.email;
            console.log(isAuthenticated);
            try {
                if (isAuthenticated) {
                    const response = await axios.post("http://localhost:8080/user/searchHistory", email, {
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


    const deleteFromSearchHistory = async (rowIndex) => {
        try {
            const rowIndexAsString = String(rowIndex);
            const response = await axios.post("http://localhost:8080/user/deleteSearch", {
                index: rowIndexAsString,
                email: user.email,
            });
            setList(prevList => prevList.filter((item, index) => index !== rowIndex));
        } catch (error) {
            console.log(error);
        }
    }

    const deleteButton = (rowIndex) => {
        return <Button
            style={{
                backgroundColor: 'red',
                color: 'white',
                borderColor: 'red',
            }}
            onClick={() => deleteFromSearchHistory(rowIndex)}>X
        </Button>
    }

    const reSearchButton = (rowData) => {
        return <span onClick={goToSearch}>{rowData}</span>
    }

    const goToSearch = async (rowData) => {
        try {
            const result = await DataFetch("all", rowData);
            navigate("/data", { state: { response: result, searchItem: rowData, isModalOpen: false } });
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div>
            <Layout isAuthenticated={isAuthenticated}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <DataTable value={list}

                               showGridlines
                               tableStyle={{ width: '60rem' }}

                    >
                        <Column field="name" header="Search" body={reSearchButton} />
                        <Column header="Remove from your history" body={deleteButton} />

                    </DataTable>


                </div>
            </Layout>
        </div>


    );
}

export default SearchHistory;