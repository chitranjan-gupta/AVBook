import React, { useState } from 'react';
import '../componentscss/Signin.css';
import man from '../images/person.svg';
import lock from '../images/lock.svg';
import sign_in from '../images/sign_in.png';
import { NavLink, useHistory } from 'react-router-dom';

function Signin(){

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();
        try{
            if(!email || !password){
                window.alert('Email Or Pasword Field Is Empty');
                return;
            }
            const res = await fetch('/api/items/signin',{
            method:"POST",
            headers:{
                'Content-Type': "application/json"
            },
            body:JSON.stringify({
                email,password
            })
        });

        const data = await res.json();

        if(res.status === 400 || !data){
            window.alert("Invalid Password");
        }else{
            console.log('Login Successful');
            window.alert("Login Successful");
            history.push("/admin");
        }}catch(err){

        }
    }

    return(
        <div className="mainBody">
        <section className="mainSBox">
            <div className="picBox">
                <img alt="sign_in" src={sign_in}/>
                <div>
                    <NavLink exact to="/signup">Create An Account to get started</NavLink>
                </div>
            </div>
            <div className="inputBox">
                <h1>Sign In</h1>
                <form method="POST">
                    <div>
                        <img alt="men" src={man}/>
                        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" autoComplete="off" required/>
                    </div>
                    <div>
                        <img alt="men" src={lock}/>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" autoComplete="off" required/>
                    </div>
                    <div className="submitbox">
                        <input type="submit" className="submitbutton" value="Login In" onClick={loginUser}/>
                    </div>
                </form>
            </div>
        </section>
    </div>
    );
}

export default Signin;