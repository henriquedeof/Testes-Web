import React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import useAuth from "../auth/useAuth";


interface PrivateRoutePropsAlt2 extends RouteProps{
    readonly isPrivatePage?: boolean,
}

const PrivateRouteAlt2: React.FC<PrivateRoutePropsAlt2> = ({component: Component, isPrivatePage, ...rest} : any) => {
    const auth = useAuth();

    const user = localStorage.getItem('teste');
    //console.log(`UsuarioAutenticado = ${user} --- PrivatePage = ${isPrivatePage}`)

    //Se usuario NAO esta logado e a pagina eh PRIVADA -> tela inicial
    if(user){
        if(user === '' && isPrivatePage) {
            console.log('entrou 1');
            return (<Redirect to="/" />);
        }
    }

    //Se usuario ESTA logado e a pagina eh PUBLICA -> tela dashboard
    if(user){
        if(user !== '' && !isPrivatePage) {
            console.log('entrou 2');
            return (<Redirect to="/dashboard" /> );
        }
    }

    console.log('retorne o padrao');
    return(
        <Route {...rest} render={ props => ( <Component {...props} /> )} />
    );

}

export default PrivateRouteAlt2;