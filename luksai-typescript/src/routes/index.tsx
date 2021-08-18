import React from 'react';
import {useAuth} from "../contexts/auth";
import {BrowserRouter, Switch} from 'react-router-dom';
// import AppRoutes from './app.routes';
// import Auth from './auth.routes';
import Dashboard from "../pages/Dashboard";
import List from "../pages/List";
import SignIn from "../pages/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";

const Routes: React.FC = () => {
    const { logged } = useAuth();


    // function RotaAutenticada({component: Component, isUsuarioAutenticado, ...props}) {
    //     return(
    //         <Route {...props} render={(componentProps) => {
    //             if(isUsuarioAutenticado){
    //                 return(
    //                     <Component {...componentProps} />
    //                 )
    //             }else{
    //                 return(
    //                     <Redirect to={{pathname : '/login', state : {from: componentProps.location}}} />
    //                 )
    //             }
    //         }} />
    //     )
    // }




    return (
        <BrowserRouter>
            <h1>{logged}</h1>
            <Switch>
                <PrivateRoute path="/" exact component={SignIn} isPrivatePage={false}/>

                <PrivateRoute path="/dashboard" exact component={Dashboard} isPrivatePage={true} />
                <PrivateRoute path="/list" exact component={List} isPrivatePage={true} />
            </Switch>

            {/*{ logged ? <AppRoutes/> : <Auth /> }*/}
        </BrowserRouter>
    );
}

export default Routes;