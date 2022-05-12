import React, { useState } from "react";
import { Link } from "react-router-dom";
import { json } from "stream/consumers";
import "./login.css";

export default function LoginIn() {
  const [hidePs, setHidePs] = useState(true);
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const changeValue = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    console.log("values username:" + values.username);
    console.log("values password:" + values.password);
  };

  return (
    <div className="login">
      <div className="login-table">
        <h1 className="login-title">Login Page</h1>
        <div className="login-input">
          <div className="username">
            <label>ユーザー名:</label>
            <input
              type="text"
              className="input-username"
              required={true}
              name="username"
              onChange={changeValue}
            />
          </div>
          <div className="user-password">
            <label>パスワード:</label>
            <input
              type={hidePs ? "password" : "text"}
              className="input-password"
              required={true}
              name="password"
              onChange={changeValue}
            />
            <input
              className="checkbox"
              type="checkbox"
              onClick={() => {
                setHidePs(!hidePs);
              }}
            />
            パスワード表示
          </div>
          <button className="submit-button" onClick={handleClick}>Submit</button>
          {/* {error && <span>{error.message}</span>} */}
        </div>
      </div>
    </div>
  );
}
