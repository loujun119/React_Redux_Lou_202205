import React, { useState } from "react";
import "./login.css";

export default function LoginIn() {
  const [hidePs, setHidePs] = useState(true);
  return (
    <div className="login">
      <h1 className="login-title">Login Page</h1>
      <div className="login-input">
        <div className="username">
          <span className="input-title">ユーザー名:</span>
          <input type="text" className="input-username" />
        </div>
        <div className="user-password">
          <span className="input-title">パスワード:</span>
          <input
            type={hidePs ? "password" : "text"}
            className="input-username"
          />
          <br />
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => {
              setHidePs(!hidePs);
            }}
          />パスワード表示
        </div>
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
}
