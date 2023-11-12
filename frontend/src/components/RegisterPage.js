import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const registerUser = async () => {
        try {
            const resp = await axios.post("//localhost:5000/register", {
                email,
                password,
            });

            navigate("/login")



        } catch (error) {
            if (error.response.status === 401) {
                alert("Invalid credentials");
            }
        }
    };

    return (
        <div>
            <h1>Create an account</h1>
            <form>
                <div>
                    <label>Email: </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id=""
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id=""
                    />
                </div>
                <button type="button" onClick={() => registerUser()}>Submit</button>
            </form>
        </div>
    );
};

export default RegisterPage;