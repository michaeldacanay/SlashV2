import { InputGroup, FormControl, DropdownButton, Dropdown, Button } from 'react-bootstrap';
import React, {useState} from 'react'
import './custom.css'
function Search() {
    const [selectedWebsite, setSelectedWebsite] = useState(null);
    const handleWebsiteSelect = (website) => {
      setSelectedWebsite(website);
    };
    return (
        <div className="form">
            <InputGroup className="mb-3">
                <FormControl
                    placeholder="Enter item name"
                    aria-label="Itemtype"
                />
                <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title={selectedWebsite || 'Websites'}
                    id="input-group-dropdown-2"
                >
                    <Dropdown.Item value="az" onClick={()=> handleWebsiteSelect("Amazon")}>Amazon</Dropdown.Item>
                    <Dropdown.Item value="wm" onClick={()=> handleWebsiteSelect("Walmart")}>Walmart</Dropdown.Item>
                    <Dropdown.Item value="cc" onClick={()=> handleWebsiteSelect("Costco")}>Costco</Dropdown.Item>
                    <Dropdown.Item value="bb" onClick={()=> handleWebsiteSelect("BestBuy")}>BestBuy</Dropdown.Item>
                    <Dropdown.Item value="cc" onClick={()=> handleWebsiteSelect("All")}>All</Dropdown.Item>
                </DropdownButton>
                <Button bsClass="search-btn" style={{
                     backgroundColor: '#00AA9B', 
                     color: 'white', 
                     borderColor: '#00AA9B', 
                     }}>Search</Button>   
            </InputGroup>
        </div>
    );
}

export default Search;