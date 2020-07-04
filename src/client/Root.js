import React from 'react';
import { Switch, Route } from 'react-router-dom';

import TransfersPage from './pages/transfers';
import CurrencyExchangePage from './pages/currency-exchange';

import HomePage from './pages/home';
import NotFoundPage from './pages/404';

import AccountPage from './pages/account';

const Root = () => {
    return (
        <div>
            <main>
                <Switch>
                    <Route path="/transfers" exact component={TransfersPage} />
                    <Route path="/currency-exchange" exact component={CurrencyExchangePage} />

                    <Route path="/" exact component={HomePage} />
                    <Route path="*" exact component={NotFoundPage} />

                    <Route path="/account" exact component={AccountPage} />
                </Switch>
            </main>
        </div>
    );
};

export default Root;
