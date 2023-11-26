import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import './custom.css'
import DataFetch from './DataFetch.js';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from './Layout.js';
import axios from "axios";

function Search() {
    const { isAuthenticated, user, isLoading } = useAuth0();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [selectedWebsite, setSelectedWebsite] = useState(null);
    const handleWebsiteSelect = (website) => {
        setSelectedWebsite(website);
        setSearchWeb(website);
    };

    useEffect(() => {
        const insertUser = async () => {


            try {
                const email = user.email;
                if (isAuthenticated && user) {
                    await axios.post(`${apiUrl}/user/addUser`, email, {
                        headers: {
                            'Content-Type': 'text/plain',
                        }
                    });

                }
            } catch (error) {
                console.log(error);
            }
        }
        if (!isLoading) {
            insertUser();
        }


    }, [user, isAuthenticated])

    const [searchItem, setSearchItem] = useState(undefined);
    const [searchWeb, setSearchWeb] = useState("all");
    const navigate = useNavigate();

    const HandleSubmission = async () => {

        try {
            const result = await DataFetch(searchWeb, searchItem);
            if (isAuthenticated) {
                await axios.post(`${apiUrl}/user/addSearch`, {
                    search: searchItem,
                    email: user.email
                });
            }
            navigate("/data", { state: { response: result, searchItem: searchItem, isModalOpen: false } });
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <Layout isAuthenticated={isAuthenticated}>
            <div className="search-form">
                <InputGroup style={{ display: 'flex' }}>
                    <FormControl
                        placeholder="Enter item name"
                        aria-label="Itemtype"
                        onChange={(e) => setSearchItem(e.target.value)}
                    />
                    <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title={selectedWebsite || "All"}
                        id="input-group-dropdown-2"
                    >
                        <Dropdown.Item onClick={() => handleWebsiteSelect("amazon")}>Amazon</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleWebsiteSelect("walmart")}>Walmart</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleWebsiteSelect("costco")}>Costco</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleWebsiteSelect("bestBuy")}>BestBuy</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleWebsiteSelect("target")}>Target</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleWebsiteSelect("ebay")}>Ebay</Dropdown.Item>
                        <Dropdown.Item onClick={() => handleWebsiteSelect("all")}>All</Dropdown.Item>
                    </DropdownButton>
                    <Button bsclass="search-btn" style={{
                        backgroundColor: '#00AA9B',
                        color: 'white',
                        borderColor: '#00AA9B',
                    }} onClick={HandleSubmission}>Search</Button>
                </InputGroup>
            </div>
        </Layout>

    );
}

export default Search;