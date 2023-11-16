import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Layout from "./Layout.js";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    const [profile, setProfile] = useState("");

    useEffect(() => {
        const loadProfile = async () => {
            console.log(isAuthenticated);
            try {
                if (isAuthenticated) {
                    await axios.post("http://localhost:8080/user/addUser/", {email: user.email})
                    const response = await axios.post("http://localhost:8080/user/profile/", {email: user.email})
                    setProfile(response.data);
                    console.log("profilecheck");
                }
            } catch (error) {
                console.log(error);
            }
        }
        loadProfile();
    }, [user, isAuthenticated])

    return (
        <div>
            <Layout isAuthenticated={isAuthenticated}>
                <h1>hello {user.email} from the backend</h1>
            </Layout>
        </div>
    )
}

export default Profile;