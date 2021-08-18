import React from 'react';
import {Link} from "react-router-dom";


const NotFound: React.FC = () => {

    return(
        <div>
            <h1>Page Not Found</h1>
            <p>Sorry, but the page you were trying to view does not exist.</p>
            <br />
            <Link to="/">Go to initial page</Link>
        </div>
    );

}

export default NotFound;