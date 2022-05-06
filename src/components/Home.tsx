import React from "react";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export const Home: React.FC = () => {
  return (
    <div>
      <AppHeader />
      <div className="homeContainer">
        <div>
          <span>welcome to react and redux Home Page</span>
        </div>
        <div>
          <a href="*"> 新規アカウント作成</a>
          <a href="*"> ログイン</a>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Home;
