import React from 'react';
import {useAuth} from "../contexts/auth";
import {Redirect, Route, RouteProps} from 'react-router-dom';

interface PrivateRouteProps extends RouteProps{
    readonly isPrivatePage: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, isPrivatePage, ...rest} : any) => {
    const { logged } = useAuth();
    console.log('LOGADO SIM O NAO? ' + logged);
    // if(!logged) return <Redirect to="/" />
    // return <Route {...rest} />

    //====================================================================================


    console.log(`UsuarioAutenticado = ${logged} --- PrivatePage = ${isPrivatePage}`)
    //if(Component) console.log('=================> : ' + Component)


    //Se usuario NAO esta logado e a pagina eh PRIVADA -> tela inicial
    //console.log('vai entrar na raiz ? ' + (auth?.user === null && isPrivatePage));
    if(logged === false && isPrivatePage) {
        console.log('entrou 1');
        return (<Redirect to="/" />);
    }


    //Se usuario ESTA logado e a pagina eh PUBLICA -> tela dashboard
    //console.log('vai entrar no /dashboard? ' + (auth?.user !== null && !isPrivatePage))
    if(logged === true && !isPrivatePage) {
        console.log('entrou 2');
        return (<Redirect to="/dashboard" /> );
    }

    console.log('retorne o padrao');
    return(
        <Route {...rest} render={ props => ( <Component {...props} /> )} />
    );




};

export default PrivateRoute;