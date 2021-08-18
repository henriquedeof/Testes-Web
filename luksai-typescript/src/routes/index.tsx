import React from 'react';
import {BrowserRouter, Switch} from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import SignIn from "../pages/SignIn";
import RouteController from "./RouteController";
import NotFound from "../pages/NotFound";

const Routes: React.FC = () => {

    return (
        <BrowserRouter>
            <Switch>
                <RouteController path="/" exact component={SignIn} isPrivatePage={false}/>

                <RouteController path="/dashboard" exact component={Dashboard} isPrivatePage={true} />
                <RouteController path="/list" exact component={List} isPrivatePage={true} />
                <RouteController path="*" exact component={NotFound} isPrivatePage={true} />
            </Switch>

        </BrowserRouter>
    );
}

export default Routes;