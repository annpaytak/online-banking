import React, {useContext} from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../context';

export default function clientPrivate(Component) {
    return function WrappedComponent(props) {
        const userService = useContext(UserContext);

        return userService.user
            ? <Component {...props} user={userService.user} />
            : <Redirect to='/welcome' />
    }
}
