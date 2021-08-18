import React from 'react';
import {Link} from 'react-router-dom';
import useAuth from "../../auth/useAuth";

const Home: React.FC = () => {
    const auth = useAuth();
    //{/*DEPOIS TESTAR O VALOR DE auth ABAIXO SEM A INTERROGACAO */}

    const handleLogin = () =>{
        auth?.signIn(() => {
            //push to logged in page.
        })
    }

    return(
        <div>
            <Link to="/private-page">Private Content</Link>
            <br />
            <Link to="/public-page">Public Content</Link>
            <br />
            <Link to="/dashboard">Dashboard Content</Link>
            <br />
            <div>{JSON.stringify(auth?.user)}</div>
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    );

};

export default Home;