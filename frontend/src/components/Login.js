import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button variant='primary' onClick={() => loginWithRedirect()}>Log in to you Slash account!</Button>
    );
};

export default Login;
