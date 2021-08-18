import React from 'react';
import {useAuth} from "../../contexts/auth";
import { Link } from 'react-router-dom';


const Dashboard: React.FC = () => {

    const {signOut} = useAuth();

    return(
        <div>DASHBOARD - PAGE - PRECISO REDIRECIONAR PRA PAGINA INICIAL CASO ACESSE ALGUM LINK INEXISTENTE E EU ESTOU LOGADO OU NAO

            <br />
            <button onClick={signOut}>EXIT</button>
            <br />
            <Link to="/list">List of issues</Link>

        </div>
    );

}

export default Dashboard;