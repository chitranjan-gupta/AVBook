import React, { useState } from "react";
import "../styles/Signup.css";
import man from "../images/person.svg";
import lock from "../images/lock.svg";
import sign_up from "../images/sign_up.png";
import { NavLink, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    cemail: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    try {
      const { name, email, cemail, password, cpassword } = user;
      if (!(name && email && cemail && password && cpassword)) {
        window.alert("Every Fields Is Must");
        return;
      }
      if (!(email === cemail && password === cpassword)) {
        window.alert(
          "Email And Confirm Email or Password And Confirm Password are not same"
        );
        return;
      }
      const res = await fetch("/api/items/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Email Already Exists!");
        console.log("Email Already Exists!");
      } else {
        window.alert("Successful Registration");
        console.log("Successful Registration");

        navigate("/signin");
      }
    } catch (err) {}
  };

  return (
    <div className="mainBody">
      <section className="mainBox">
        <div className="inputBox">
          <h1>Sign up</h1>
          <form method="POST">
            <div>
              <img alt="men" src={man} />
              <input
                type="text"
                name="name"
                id="name"
                value={user.name}
                onChange={handleInputs}
                placeholder="Your Name"
                autoComplete="off"
              />
            </div>
            <div>
              <img alt="men" src={man} />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                value={user.email}
                onChange={handleInputs}
                autoComplete="off"
              />
            </div>
            <div>
              <img alt="men" src={man} />
              <input
                type="email"
                name="cemail"
                id="cemail"
                placeholder="Confirm Your Email"
                value={user.cemail}
                onChange={handleInputs}
                autoComplete="off"
              />
            </div>
            <div>
              <img alt="men" src={lock} />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={user.password}
                onChange={handleInputs}
                autoComplete="off"
              />
            </div>
            <div>
              <img alt="men" src={lock} />
              <input
                type="password"
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Your Password"
                value={user.cpassword}
                onChange={handleInputs}
                autoComplete="off"
              />
            </div>
            <div className="submitbox">
              <input
                type="submit"
                className="submitbutton"
                value="Sign Up"
                onClick={postData}
              />
            </div>
          </form>
        </div>
        <div className="picBox">
          <img alt="" src={sign_up} />
          <div>
            <NavLink to="/signin">
              Already Registered? Sign In
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
