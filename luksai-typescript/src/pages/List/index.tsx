import React from 'react';
import {Link} from "react-router-dom";


const List: React.FC = () => {

    return(
        <div>
            LIST - PAGE
            <br />
            <Link to="/dashboard">Dasboard page</Link>
        </div>
    );

}

export default List;