import React from 'react';
import '../componentscss/Error.css';
import { NavLink } from 'react-router-dom';

function Error(){
    return(
        <div className="erro-home">
            <h1>WE ARE SORRY, PAGE NOT FOUND!</h1>
            <span>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS NAME CHANGED OR ITS TEMPORARY UNAVAILABLE</span>
            <div><NavLink exact to="/home">BACK TO HOMEPAGE</NavLink></div>
        </div>
    );
}

export default Error;