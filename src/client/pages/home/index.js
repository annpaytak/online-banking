import React from 'react';
import { Link } from 'react-router-dom'

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
            <footer>
                <button>
                    <Link to='account'>
                        account
                    </Link>
                </button>
            </footer>
        </div>
    );
};

export default HomePage;
