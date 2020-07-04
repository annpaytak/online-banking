import React from 'react';


import WelcomePage from '../welcome';
import Transactions from '../../components/transactions';
import Wallet from '../../components/wallet';
import Spendings from '../../components/spendings';

const HomePage = () => {
    const authenticated = true;

    if(!authenticated) return <WelcomePage/>;
    return (
        <div>
           <main>
               <Transactions />
               <Wallet />
               <Spendings />
           </main>
        </div>
    );
};

export default HomePage;
