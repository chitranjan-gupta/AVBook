import React from 'react';
import { Route, Switch } from "react-router-dom";
import Signup from './components/Signup';
import Signin from './components/Signin';
import Home from './components/Home';
import Error from './components/Error';
import './App.css';
import { NavLink } from 'react-router-dom';
import Advertise from './components/Advertise';
import Download from './components/Download';
import Movies from './components/Movies';
import Request from './components/Request';
import Shows from './components/Shows';
import logo_main from './images/logo_main.png';
import lines from './images/lines.svg';
import Contact from './components/Contact';
import Admin from './components/Admin';
import Signout from './components/Signout';

function App(){
  var isDropped = false;
  const dropDown = () => {
    const el = document.querySelector("#menuBar");
    const menuContent = document.querySelector("#menuContent");
      el.classList.toggle("showMenu");
      if(el.classList.contains("showMenu")){
        isDropped = true;
      }else{
        isDropped = false;
      }
      el.addEventListener('transitionrun',()=>{
        el.style.zIndex = "3";
      });
      el.addEventListener('transitionstart',()=>{
        el.style.zIndex = "3";
        if(!isDropped){
          menuContent.style.visibility = "hidden";
        }
      });
      el.addEventListener('transitioncancel',()=>{
        
      });
      el.addEventListener('transitionend',()=>{
        menuContent.style.visibility = "visible";
        if(!isDropped){
          el.style.zIndex = "1";
          menuContent.style.visibility = "hidden";
        }
      });
  };

  return (
    <div className="App">
      <div id="toolBar" className="toolbar">
        <div className="brand">
          <div className="logo">
            <img alt="logo" src={logo_main}/>
          </div>
          <span>
            <h1>moviesdawnload.
              <b className="th">com</b>
            </h1>
          </span>
        </div>
        <div className="drop" onClick={dropDown}>
          <img alt="Drop" src={lines}/>
        </div>
        <div id="menuShow" className="menu">
          <div className="selected">
            <NavLink exact to="/home">Home</NavLink>
          </div>
          <div>
            <NavLink exact to="/movies">Movies</NavLink>
          </div>
          <div>
            <NavLink exact to="/shows">Shows</NavLink>
          </div>
          <div>
            <NavLink exact to="/request">Request movies or shows</NavLink>
          </div>
          <div>
            <NavLink exact to="/download">How to Download?</NavLink>
          </div>
          <div>
            <NavLink exact to="/advertise">Advertise with us</NavLink>
          </div>
        </div>
      </div>
      <div id="menuBar" className="menubar">
          <section id="menuContent">
            <div>
              <NavLink exact to="/home">Home</NavLink>
            </div>
            <div>
              <NavLink exact to="/movies">Movies</NavLink>
            </div>
            <div>
              <NavLink exact to="/shows">Shows</NavLink>
            </div>
            <div>
              <NavLink exact to="/request">Request movies or shows</NavLink>
            </div>
            <div>
              <NavLink exact to="/download">How to Download?</NavLink>
            </div>
            <div>
              <NavLink exact to="/advertise">Advertise with us</NavLink>
            </div>
          </section>
      </div>
      <div className="content">
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/signin" component={Signin}></Route>
            <Route exact path="/signup" component={Signup}></Route>
            <Route exact path="/movies" component={Movies}></Route>
            <Route exact path="/shows" component={Shows}></Route>
            <Route exact path="/request" component={Request}></Route>
            <Route exact path="/download" component={Download}></Route>
            <Route exact path="/advertise" component={Advertise}></Route>
            <Route exact path="/contactus" component={Contact}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/signout" component={Signout}></Route>
            <Route exact path="/404" component={Error}></Route>
            <Route component={Error}></Route>
          </Switch>
        </div>
    </div>
  );
}

export default App;