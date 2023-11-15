import React, { useState } from 'react';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';
import './custom.css';
import axios from 'axios';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

const RequestModal = ({ isOpen, onRequestClose }) => {
    const [product, setProduct] = useState('');

    const handleInputChange = (e) => {
        const {value} = e.target;
        setProduct(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        ///////make request
        request()
        console.log('Form submitted:', product);
        onRequestClose();
    };

    const request = async () => {
        try {
            await axios.get(`http://localhost:8080/request/${product}`)
            console.log("sent scrape api request");
        } catch (error) {
            console.error('Error with scraper: ', error);
        }
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <h2>Add new products to our database</h2>
            <form>
                <label>
                    Enter the product you want to search for:
                    <br />
                    <input
                        type="text"
                        name="product"
                        value={product}
                        onChange={handleInputChange}
                    />
                </label>
                <br />
                <Button onClick={handleSubmit} style={{
                    backgroundColor: '#00AA9B',
                    color: 'white',
                    borderColor: '#00AA9B',
                }} type="submit">Request</Button>
            </form>
        </Modal>
    );
};

export default RequestModal;