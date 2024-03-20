import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./styles/Layout.css";
import logo_main from "./images/logo_main.png";
import lines from "./images/lines.svg";

function Layout() {
  var isDropped = false;
  const dropDown = () => {
    const el = document.querySelector("#menuBar");
    const menuContent = document.querySelector("#menuContent");
    el.classList.toggle("showMenu");
    if (el.classList.contains("showMenu")) {
      isDropped = true;
    } else {
      isDropped = false;
    }
    el.addEventListener("transitionrun", () => {
      el.style.zIndex = "3";
    });
    el.addEventListener("transitionstart", () => {
      el.style.zIndex = "3";
      if (!isDropped) {
        menuContent.style.visibility = "hidden";
      }
    });
    el.addEventListener("transitioncancel", () => {});
    el.addEventListener("transitionend", () => {
      menuContent.style.visibility = "visible";
      if (!isDropped) {
        el.style.zIndex = "1";
        menuContent.style.visibility = "hidden";
      }
    });
  };

  return (
    <div className="Layout">
      <div id="toolBar" className="toolbar">
        <div className="brand">
          <div className="logo">
            <img alt="logo" src={logo_main} />
          </div>
          <span>
            <h1>
              moviesdawnload.
              <b className="th">com</b>
            </h1>
          </span>
        </div>
        <div className="drop" onClick={dropDown}>
          <img alt="Drop" src={lines} />
        </div>
        <div id="menuShow" className="menu">
          <div className="selected">
            <NavLink to="/home">Home</NavLink>
          </div>
          <div>
            <NavLink to="/movies">Movies</NavLink>
          </div>
          <div>
            <NavLink to="/shows">Shows</NavLink>
          </div>
          <div>
            <NavLink to="/request">Request movies or shows</NavLink>
          </div>
          <div>
            <NavLink to="/download">How to Download?</NavLink>
          </div>
          <div>
            <NavLink to="/advertise">Advertise with us</NavLink>
          </div>
        </div>
      </div>
      <div id="menuBar" className="menubar">
        <section id="menuContent">
          <div>
            <NavLink to="/home">Home</NavLink>
          </div>
          <div>
            <NavLink to="/movies" data-testid="movies">Movies</NavLink>
          </div>
          <div>
            <NavLink to="/shows">Shows</NavLink>
          </div>
          <div>
            <NavLink to="/request">Request movies or shows</NavLink>
          </div>
          <div>
            <NavLink to="/download">How to Download?</NavLink>
          </div>
          <div>
            <NavLink to="/advertise">Advertise with us</NavLink>
          </div>
        </section>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
