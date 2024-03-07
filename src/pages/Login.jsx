import React, { useEffect } from "react";
import { useState } from "react";

import "./login.css";
import img from "../assets/images/fdre_logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [password, setPassword] = useState("");
  const [mess, setMess] = useState("");


  const handleButtonClick = () => {
    validation();
  };
  const validation = () => {
    const desiredEmail = "admin1234@gmail.com";
    const desiredpassword = "admin1234";
    if (email === desiredEmail && password === desiredpassword) {
      setMessage("valid email and password");
      history.push("/dashboard");
    } else if (email !== "" && password !== "") {
      setMessage("Incorrect password or email");
    } else {
      setMessage("");
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="full">
      <div className="container">
        <div className="image-section">
          <img src={img} alt="" style={{ width: "250px", height: "350px" }} />
        </div>
        <div className="cover">
          <h1>Login</h1>

          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter your email "
            value={email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={handleChange} />
          <h6 className="forgot">forgot your password?</h6>
          <button onClick={handleButtonClick} className="btn">
            Login
          </button>
          <p className="message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;