import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Layout from "./Layout.js";
import {Column} from "primereact/column/column.esm.js";
import {DataTable} from "primereact/datatable/datatable.esm.js";

const Marketplace = () => {
    const { user, isAuthenticated } = useAuth0();
    const apiUrl = process.env.REACT_APP_API_URL;
    const [feed, setFeed] = useState();
    const [newPost, setNewPost] = useState({ title: '', description: '', price: '', imageFiles: [], comments: [] });


    useEffect(() => {

        const loadFeed = async () => {
            try {
                const response = await axios.get(`${apiUrl}/feed`);
                setFeed(response.data);
                console.log(feed);
            } catch (error) {
                console.log(error);
            }
        }







        loadFeed();
    }, []);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setNewPost((prevPost) => ({ ...prevPost, imageFiles: files }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a FormData object to send files
            const formData = new FormData();
            formData.append('title', newPost.title);
            formData.append('description', newPost.description);
            formData.append('price', newPost.price);
            newPost.imageFiles.forEach((file, index) => {
                formData.append(`image_${index + 1}`, file);
            });

            // Send API request to add the new post with images
            await axios.post(`${apiUrl}/add-post`, formData);

            // Clear the form after successful submission
            setNewPost({
                title: '',
                description: '',
                price: '',
                imageFiles: [],
                comments: [],
            });

            // Refresh the post feed
            const response = await axios.get(`${apiUrl}/feed`);
            setFeed(response.data);
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
                                <input type="file" name="imageFiles" multiple onChange={handleImageChange} />
                            </div>
                            {/* Add other fields as needed */}
                            <div>
                                <button type="submit">Submit</button>
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
                                        {rowData.imageFiles &&
                                            rowData.imageFiles.length > 0 && (
                                                <div>
                                                    {rowData.imageFiles.map((image, index) => (
                                                        <img
                                                            key={index}
                                                            src={image}
                                                            alt={`Image ${index + 1}`}
                                                            style={{
                                                                width: '50px',
                                                                height: '50px',
                                                                marginRight: '5px',
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        {/* Render comments if available */}
                                        {rowData.comments.length > 0 && (
                                            <div>
                                                <h3>Comments:</h3>
                                                <ul>
                                                    {rowData.comments.map((comment, index) => (
                                                        <li key={index}>{comment.text}</li>
                                                    ))}
                                                </ul>
                                            </div>
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