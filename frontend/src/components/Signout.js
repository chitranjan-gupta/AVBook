import React, { useEffect } from 'react';
import {useHistory} from 'react-router-dom';

function Signout(){

    const history = useHistory();

    useEffect(() => {
        fetch('/api/items/signout',{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then(() =>{
            history.push('/signin', { replace:true});
        }).catch((err) => console.log(err))
    });

    return(
        <>
        </>
    );
}

export default Signout;