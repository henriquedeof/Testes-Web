import React from 'react';
import {Redirect, Route, RouteProps} from 'react-router-dom';
import useAuth from "../auth/useAuth";


interface PrivateRouteProps extends RouteProps{
    readonly isPrivatePage?: boolean,
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({component: Component, isPrivatePage, ...rest} : any) => {
    const auth = useAuth();
    auth?.signOut(() => {});

    //console.log(`UsuarioAutenticado = ${auth?.user}   -------   PrivatePage = ${isPrivatePage}`)
    //if(Component) console.log('=================> : ' + Component)


    //Se usuario NAO esta logado e a pagina eh PRIVADA -> tela inicial
    // console.log('vai entrar na raiz ? ' + (auth?.user !== null && isPrivatePage));
    if(auth?.user === null && isPrivatePage) return <Redirect to="/" />

    //Se usuario ESTA logado e a pagina eh PUBLICA
    // console.log('vai entrar no /dashboard? ' + (auth?.user !== null && isPrivatePage))
    if(auth?.user !== null && !isPrivatePage) return <Redirect to="/dashboard" />

    console.log('retorne o padrao');
    return(
        // <Route {...rest} />
        <Route {...rest} render={ props => ( <Component {...props} /> )} />
    )

}

export default PrivateRoute;