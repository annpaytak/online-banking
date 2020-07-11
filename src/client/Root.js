import React, {useContext, useEffect, useState} from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { CreditCard, Home, EuroSymbol, EmojiPeople } from '@material-ui/icons';

import clientPrivate from './hoc/client-private';
import UserContext from './context';

// pages
import WelcomePage from './pages/welcome';
import HomePage from './pages/home';
import TransfersPage from './pages/transfers';
import CurrencyExchangePage from './pages/currency-exchange';
import AccountPage from './pages/account';
import NotFoundPage from './pages/404';

const Root = () => {
    const userService = useContext(UserContext);

    const { pathname } = useLocation();
    const currentValueFromPath = pathname.split('/')[1];

    const [value, setValue] = useState(currentValueFromPath);

    const handleChange = (event, newValue) => { setValue(newValue) };

    // const [userData, setUserData] = useState(null);

   useEffect(() => {
       userService.load();

       // userService.userChange.subscribe(async userData => {
       //     if (!userData) return;
       //     // setUserData(userData);
       // });
   }, []);

    // const encodeUri = encodeURIComponent(window.location.href);
    // const redirectUrl = `/signin?returnurl=${encodeUri}`;

    return (
        <div>
            <main>
                <Switch>
                    <Route path="/welcome" exact component={WelcomePage} />
                    <Route path="/transfers" exact component={clientPrivate(TransfersPage)} />
                    <Route path="/currency-exchange" exact component={clientPrivate(CurrencyExchangePage)} />
                    <Route path="/account" exact component={clientPrivate(AccountPage)} />

                    <Route path="/" exact component={clientPrivate(HomePage)} />
                    <Route path="*" exact component={NotFoundPage} />
                </Switch>
            </main>
            {userService.user &&
                <BottomNavigation value={value} onChange={handleChange}>
                    <BottomNavigationAction component={Link} to="/" showLabel={true} label="Home" value="home" icon={<Home />}/>
                    <BottomNavigationAction component={Link} to="/transfers"  showLabel={true} label="Transfers" value="transfers" icon={<CreditCard />}/>
                    <BottomNavigationAction component={Link} to="/currency-exchange"  showLabel={true} label="Currency Exchange" value="currency" icon={<EuroSymbol />}/>
                    <BottomNavigationAction component={Link} to="/account"  showLabel={true} label="Account" value="nearby" icon={<EmojiPeople />}/>
                </BottomNavigation>
            }
        </div>
    );
};

// const RootWithService = (props) => (
//     <UserContext.Consumer>
//         {userService => <Root {...props} userService={userService} />}
//     </UserContext.Consumer>
// );

export default Root;
