import React from 'react';
import {useAuth} from "../contexts/auth";
import {Redirect, Route, RouteProps} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps{
    readonly isPrivatePage: boolean;
    component: any
}

const RouteController: React.FC<PrivateRouteProps> = ({component: Component, isPrivatePage, ...rest}) => {
    const { logged } = useAuth();

    //If user is NOT logged and it is a PRIVATE page, then go to the initial page
    if(logged === false && isPrivatePage) {
        return (<Redirect to="/" />);
    }

    //If user IS logged and it is a PUBLIC page, then go to the dashboard page.
    if(logged === true && !isPrivatePage) {
        return (<Redirect to="/dashboard" /> );
    }

    return(
        <Route {...rest} render={ props => ( <Component {...props} /> )} />
    );

};

export default RouteController;