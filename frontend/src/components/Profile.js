import React, {useState, useEffect} from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Layout from "./Layout.js";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();

    const [profile, setProfile] = useState("");

    useEffect(() => {
        const loadProfile = async () => {

            const email = user.email;

            try {
                if (isAuthenticated) {
                    await axios.post("http://localhost:8080/user/addUser/", email, {
                        headers: {
                            'Content-Type': 'text/plain',
                        }
                    });
                    const response = await axios.post("http://localhost:8080/user/profile/", email, {
                        headers: {
                            'Content-Type': 'text/plain',
                        }
                    });
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
                <h1>{profile}</h1>
            </Layout>
        </div>
    )
}

export default Profile;