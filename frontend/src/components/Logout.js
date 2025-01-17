import { useAuth0 } from '@auth0/auth0-react';

const Logout = () => {
    const { logout } = useAuth0();
    logout({logoutParams: { returnTo: window.location.origin }});

    return null;
};

export default Logout;