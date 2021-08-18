import React from 'react';
import {useAuth} from "../../contexts/auth";
import {Link} from 'react-router-dom';


const Dashboard: React.FC = () => {

    const {signOut} = useAuth();

    return(
        <div>
            <br />
            <button onClick={signOut}>SignOut</button>
            <br />
            <Link to="/list">List of issues</Link>
        </div>
    );

}

export default Dashboard;