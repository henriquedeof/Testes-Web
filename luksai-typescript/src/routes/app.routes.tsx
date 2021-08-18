import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

//RENOMEAR O NOME DO ARQUIVO E DO COMPONENTE PARA AUTHENTICATED-ROUTES?
const AppRoutes: React.FC = () => {

    return(
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/list" exact component={List} />
        </Switch>
    );

};

export default AppRoutes;