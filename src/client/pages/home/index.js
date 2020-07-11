import React from 'react';

//templates
import Transactions from '../../components/transactions';
import Wallet from '../../components/wallet';
import Spendings from '../../components/spendings';

const HomePage = () => {
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
