import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";
import logo_main from "../images/logo_main.png";
import person from "../images/person.svg";
import people from "../images/people.svg";
import lock from "../images/lock.svg";
import home from "../images/home.svg";
import signout from "../images/logout.svg";
import setting from "../images/setting.svg";
import edit from "../images/edit.svg";
import search from "../images/search.svg";

function Admin() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAdminPage = async () => {
    try {
      const res = await fetch("/api/items/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.status === 401) {
        navigate("/signin");
        console.log("Unauthorized");
        return;
      }
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log(err);
      navigate("/signin");
    }
  };

  useEffect(() => {
    callAdminPage();
  });

  return (
    <div className="adminBox">
      <section className="postBox">
        <div className="optionBox">
          <div className="brandBox">
            <div>
              <img alt="logo" src={logo_main} />
            </div>
          </div>
          <div className="listBox">
            <div className="loginBox">
              <div>
                <img alt="admin pic" src={person} />
              </div>
              <span>
                <h4>{userData.name || "John Doe"}</h4>
                <b>Founder</b>
              </span>
            </div>
            <ul>
              <li className="activeListBox">
                <div>
                  <img alt="home" src={home} />
                </div>
                DashBoard
              </li>
              <li>
                <div>
                  <img alt="edit" src={edit} />
                </div>
                Posts
              </li>
              <li>
                <div>
                  <img alt="people" src={people} />
                </div>
                Customers
              </li>
              <li>
                <div>
                  <img alt="chat" src={people} />
                </div>
                Messages
              </li>
              <li>
                <div>
                  <img alt="question" src={people} />
                </div>
                Help
              </li>
              <li>
                <div>
                  <img alt="setting" src={setting} />
                </div>
                Settings
              </li>
              <li>
                <div>
                  <img alt="lock" src={lock} />
                </div>
                Password
              </li>
              <li>
                <div>
                  <img alt="out" src={signout} />
                </div>
                Sign Out
              </li>
            </ul>
          </div>
        </div>
        <div className="workBox">
          <header>
            <h1>Dashboard</h1>
            <div>
              <input type="text" placeholder="Search here" />
              <div>
                <img alt="sicon" src={search} />
              </div>
            </div>
          </header>
          <div className="contentBox">
            <div>
              <h1>Hello, {userData.name || "John Doe"}</h1>
            </div>
            <div className="statBox">
              <div className="statCard">
                <div>
                  <img alt="edit" src={edit} />
                </div>
                <span>Total Posts</span>
                <h3>1000</h3>
                <i>Increased by 60%</i>
              </div>
              <div className="statCard">
                <div>
                  <img alt="edit" src={edit} />
                </div>
                <span>Total Posts</span>
                <h3>1000</h3>
                <i>Increased by 60%</i>
              </div>
              <div className="statCard">
                <div>
                  <img alt="edit" src={edit} />
                </div>
                <span>Total Posts</span>
                <h3>1000</h3>
                <i>Increased by 60%</i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Admin;
