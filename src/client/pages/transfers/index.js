import React, { useContext } from 'react';
import UserContext from '../../context';

const TransfersPage = () => {
    const userService = useContext(UserContext);
    console.log('TransfersPage', userService);
    return (
        <div>
            TransfersPage
        </div>
    );
};

export default TransfersPage;
