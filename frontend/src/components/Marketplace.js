import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Layout from "./Layout.js";
import {Column} from "primereact/column/column.esm.js";
import {DataTable} from "primereact/datatable/datatable.esm.js";

const Marketplace = () => {
    const { user, isAuthenticated } = useAuth0();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [feed, setFeed] = useState([]);
    const [newPost, setNewPost] = useState({ title: '', description: '', price: '', imageFile: ' '});


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



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleImageChange = (e) => {
        // Store only the file path, not the entire file
        const filePath = e.target.value;
        setNewPost((prevPost) => ({ ...prevPost, imageFile: filePath }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {




            await axios.post(`${apiUrl}/user/makePost`, {
                title: newPost.title,
                description: newPost.description,
                price: newPost.price,
                imageFile: newPost.imageFile,
                userEmail: user.email,
            });


            setNewPost({
                title: '',
                description: '',
                price: '',
                imageFiles: [],
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
                    {/* Form Section */}
                    <div style={{ flex: '0 0 30%', padding: '20px' }}>
                        <h3>Add New Post</h3>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Title:</label>
                                <input type="text" name="title" value={newPost.title} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label>Description:</label>
                                <input type="text" name="description" value={newPost.description} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label>Price:</label>
                                <input type="text" name="price" value={newPost.price} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label>Images:</label>
                                <input type="file" accept="image/*"  onChange={handleImageChange} />
                            </div>
                            <div>
                                <button type="submit">Post</button>
                            </div>
                        </form>
                    </div>

                    {/* DataTable Section */}
                    <div style={{ flex: '1', padding: '20px' }}>
                        <h1>Marketplace</h1>
                        <DataTable value={feed}>
                            <Column
                                header="Post Information"
                                body={(rowData) => (
                                    <div>
                                        <h2>{rowData.title}</h2>
                                        <p>{rowData.description}</p>
                                        <p>Price: {rowData.price}</p>
                                        {/* Render images if available */}
                                        {rowData.imageFile && (
                                            <img
                                                src={rowData.imageFile}
                                                alt={`Post Image`}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    marginRight: '5px',
                                                }}
                                            />
                                        )}

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