import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="navigation">
        <div>
          <h2>ナビゲーター</h2>
        </div>
      </div>
      <div className="homeContainer">
        <div>
          <h1>welcome to react and redux Home Page</h1>
        </div>
        <div>
          <Link to="/login">
            <button className="login-account">ログイン</button>
          </Link>
          <Link to="/login/addNew">
            <button className="add-new-account">新規作成</button>
          </Link>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home;
