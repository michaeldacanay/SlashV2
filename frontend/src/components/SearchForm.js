import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import './custom.css'
import DataFetch from './DataFetch.js';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Layout from './Layout.js';

function Search() {
    const { isAuthenticated } = useAuth0();
    const [selectedWebsite, setSelectedWebsite] = useState(null);
    const handleWebsiteSelect = (website) => {
        setSelectedWebsite(website);
        setSearchWeb(website);
    };

    const [searchItem, setSearchItem] = useState(undefined);
    const [searchWeb, setSearchWeb] = useState("all");
    const navigate = useNavigate();

    const HandleSubmission = async () => {
        // try {
        //     await axios.get(`http://localhost:8080/request/${searchWeb}/${searchItem}`)
        //     console.log("sent scrape api request");
        // } catch (error) {
        //     console.error('Error with scraper: ', error);
        // }


        try {
            const result = await DataFetch(searchWeb, searchItem);
            ////add to search history
            navigate("/data", { state: { response: result, searchItem: searchItem, isModalOpen: false } });
        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div>
            <Layout isAuthenticated={isAuthenticated}>
                <div className="form">
                    <InputGroup className="mb-3">
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
        </div>

    );
}

export default Search;