import React from 'react';

// templates
import Signin from '../../components/signin';
import BecomeClient from '../../components/become-client';

const WelcomePage = () => {
    return (
        <div>
            <h1>Welcome to banking.</h1>
            <Signin />
            <BecomeClient />
        </div>
    );
};

export default WelcomePage;
