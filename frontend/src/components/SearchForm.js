import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import React, { useState } from 'react'
import './custom.css'
import DataFetch from './DataFetch.js';
import { useNavigate } from 'react-router-dom';

function Search() {
    const [selectedWebsite, setSelectedWebsite] = useState(null);
    const handleWebsiteSelect = (website) => {
        setSelectedWebsite(website);
        setSearchWeb(website);
    };

    const [searchItem, setSearchItem] = useState(undefined);
    const [searchWeb, setSearchWeb] = useState("All");
    const navigate = useNavigate();

    const HandleSubmission = async () => {
        try {
            const result = await DataFetch(searchWeb, searchItem);
            navigate("/data", { state: { response: result } });
        } catch (error) {
            console.log(error);
        }

    }
    return (
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
                    <Dropdown.Item onClick={() => handleWebsiteSelect("Amazon")}>Amazon</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleWebsiteSelect("Walmart")}>Walmart</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleWebsiteSelect("Costco")}>Costco</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleWebsiteSelect("BestBuy")}>BestBuy</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleWebsiteSelect("All")}>All</Dropdown.Item>
                </DropdownButton>
                <Button bsclass="search-btn" style={{
                    backgroundColor: '#00AA9B',
                    color: 'white',
                    borderColor: '#00AA9B',
                }} onClick={HandleSubmission}>Search</Button>
            </InputGroup>
        </div>
    );
}

export default Search;