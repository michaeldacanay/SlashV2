import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Layout from "./Layout.js";
import {Column} from "primereact/column/column.esm.js";
import {DataTable} from "primereact/datatable/datatable.esm.js";
import './custom.css';
import {Button} from "react-bootstrap";

const Marketplace = () => {
    const { user, isAuthenticated } = useAuth0();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [feed, setFeed] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', description: '', price: '', imageFile: ' '});

    const email = user.email;


    const loadFeed = async () => {
        try {
            const response = await axios.get(`${apiUrl}/feed`);
            console.log(response.data);
            setFeed(response.data);
            console.log(feed);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {

        loadFeed();
    }, []);

    function generateUniqueKey() {
        const timestamp = new Date().getTime(); // Get current timestamp
        const random = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999

        return `${timestamp}-${random}`;
    }



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const base64String = reader.result.split(',')[1];
            const uniqueKey = generateUniqueKey();
            localStorage.setItem(uniqueKey, base64String);
            setNewPost((prevPost) => ({ ...prevPost, imageFile: uniqueKey }));
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {




            await axios.post(`${apiUrl}/user/makePost`, {
                title: newPost.title,
                description: newPost.description,
                price: newPost.price,
                imageFile: newPost.imageFile,
                userEmail: email,
            });


            setNewPost({
                title: '',
                description: '',
                price: '',
                imageFile: '',
            });


            loadFeed();
        } catch (error) {
            console.error('Error adding post:', error);
        }
    };



    return (
        <div>
            <Layout isAuthenticated={isAuthenticated}>
                <div style={{ display: 'flex' }}>
                    <div style={{ flex: '0 0 30%', padding: '20px' }}>
                        <h3>Create Post</h3>
                        <form onSubmit={handleSubmit} className="form-container">
                            <div className="form-group">
                                <label>Title:</label>
                                <br />
                                <input type="text" name="title" value={newPost.title} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <br />
                                <input type="text" name="description" value={newPost.description} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Price:</label>
                                <br />
                                <input type="text" name="price" value={newPost.price} onChange={handleInputChange} required />
                            </div>
                            <div className="form-group">
                                <label>Image:</label>
                                <br />
                                <input type="file" accept="image/*" onChange={handleImageChange} />
                            </div>
                            <div className="form-group">
                                <button type="submit" style={{
                                    width: '100px',
                                    backgroundColor: '#00AA9B',
                                    color: 'white',
                                    borderColor: '#00AA9B',
                                    margin: '20px'
                                }}>Post</button>
                            </div>
                        </form>
                    </div>

                    {/* DataTable Section */}
                    <div style={{ flex: '1', padding: '20px' }}>
                        <h1>Slash Marketplace</h1>
                        <DataTable value={feed} className="custom-datatable" style={{width: '40%'}}>
                            <Column
                                header="Post Information"
                                body={(rowData) => (
                                    <div style={{maxWidth: '300px'}}>
                                        <h2>{rowData.title}</h2>
                                        <p>Price: {rowData.price}</p>
                                        <p style={{ overflowWrap: 'break-word', wordWrap: 'break-word' }}>{rowData.description}</p>


                                        {rowData.imageFile && (
                                            <img
                                                src={`data:image/png;base64,${localStorage.getItem(
                                                    rowData.imageFile
                                                )}`}
                                                alt={`Post Image`}
                                                style={{
                                                    width: '200px',
                                                    height: '200px',
                                                    marginRight: '5px',
                                                }}
                                            />
                                        )}
                                        <p></p>
                                        <p>Contact Seller: {rowData.userEmail}</p>

                                    </div>
                                )}
                            ></Column>
                        </DataTable>
                    </div>
                </div>
            </Layout>
        </div>
    );

}

export default Marketplace;