import React, { useState } from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { CreditCard, Home, EuroSymbol, EmojiPeople } from '@material-ui/icons';

import HomePage from './pages/home';
import TransfersPage from './pages/transfers';
import CurrencyExchangePage from './pages/currency-exchange';
import AccountPage from './pages/account';
import NotFoundPage from './pages/404';

const Root = () => {
    const { pathname } = useLocation();
    const currentValueFromPath = pathname.split('/')[1];

    const [value, setValue] = useState(currentValueFromPath);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <main>
                <Switch>
                    <Route path="/transfers" exact component={TransfersPage} />
                    <Route path="/currency-exchange" exact component={CurrencyExchangePage} />
                    <Route path="/account" exact component={AccountPage} />

                    <Route path="/" exact component={HomePage} />
                    <Route path="*" exact component={NotFoundPage} />
                </Switch>
            </main>
            <BottomNavigation value={value} onChange={handleChange}>
                <BottomNavigationAction component={Link} to="/" showLabel={true} label="Home" value="home" icon={<Home />}/>
                <BottomNavigationAction component={Link} to="/transfers"  showLabel={true} label="Transfers" value="transfers" icon={<CreditCard />}/>
                <BottomNavigationAction component={Link} to="/currency-exchange"  showLabel={true} label="Currency Exchange" value="currency" icon={<EuroSymbol />}/>
                <BottomNavigationAction component={Link} to="/account"  showLabel={true} label="Account" value="nearby" icon={<EmojiPeople />}/>
            </BottomNavigation>
        </div>
    );
};

export default Root;
