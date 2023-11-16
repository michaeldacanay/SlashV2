import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

const Login = () => {
    const { isAuthenticated, loginWithRedirect} = useAuth0();

    useEffect(() => {
        if (!isAuthenticated) {
            loginWithRedirect();
        }
    }, [isAuthenticated, loginWithRedirect]);

    return null;
};

export default Login;
