import React from 'react';

import {BrowserRouter, Switch} from 'react-router-dom';
import PrivatePage from "./pages/PrivatePage";
import PublicPage from "./pages/PublicPage";
import Home from "./pages/Home";
import AuthProvider from "./auth/AuthProvider";
// import PrivateRoute from "./routes/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import PrivateRouteAlt2 from "./routes/PrivateRouteAllt2";

function App() {

    //Posso utilizar tanto o PrivateRoute quanto o PrivateRouteAlt2
    //O PrivateRouteAlt2 funciona melhor com os propositos do teste.

    return (
        <AuthProvider>
            <BrowserRouter>
                <Switch>
                    <PrivateRouteAlt2 exact path="/" component={Home} isPrivatePage={false} />
                    <PrivateRouteAlt2 exact path="/public-page" component={PublicPage} isPrivatePage={false} />


                    <PrivateRouteAlt2 exact path="/private-page" component={PrivatePage} isPrivatePage={true} />
                    <PrivateRouteAlt2 exact path="/dashboard" component={Dashboard}  isPrivatePage={true} />
                {/*    o que fazer com paginas que nao existem?*/}
                </Switch>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
