import React from 'react';
import {Route, Switch} from 'react-router-dom';

import SignIn from "../pages/SignIn/SignIn";

//RENOMEAR O NOME DO ARQUIVO E DO COMPONENTE PARA PUBLIC-ROUTES
const AuthRoutes: React.FC = () => {

    return(
        <Switch>
            <Route path="/" component={SignIn} />
        </Switch>
    );
};

export default AuthRoutes;