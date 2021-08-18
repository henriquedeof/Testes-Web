import React from 'react';
import {Link} from "react-router-dom";


const List: React.FC = () => {

    return(
        <div>
            LIST - PAGE
            <Link to="/dashboard">List of issues</Link>
        </div>
    );

}

export default List;