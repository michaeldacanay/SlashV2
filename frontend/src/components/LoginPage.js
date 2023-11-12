import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

const LoginPage= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const logInUser = async () => {

        try {
            const response = await axios.post("//localhost:8080/login", {
                email,
                password,

            });

            if (response.data === "user") {
                navigate("/search")
            }




        } catch (error) {
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        }



    };

    return (
        <div>
            <h1>Log In</h1>
            <form>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="button" onClick={() => logInUser()}>Submit</button>
            </form>
        </div>
    );
};

export default LoginPage;