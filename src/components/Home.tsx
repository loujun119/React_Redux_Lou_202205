import React from "react";
import { makeStyles } from "@material-ui/styles";
import "./home.css";

const HomeStyles = makeStyles({
  home: {
    position: "fixed",
    backgroundColor: "#0071c2",
    top: "32px",
    width: "100%",
    height: "40%",
    display: "flex",
    alignItems: "center",
    marginTop: "3px",
    marginBottom: "3px",
  },
  navigation: {
    display: "flex",
    alignItems: "left",
    backgroundColor: 'coral',
    // width: '100%',
    height: '100%',
  },
  homeContainer: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: "1024px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const Home: React.FC = () => {
  const classes = HomeStyles();
  return (
    <div className={classes.home}>
      <div className={classes.navigation}>
        <div>ナビゲーター</div>
      </div>
      <div className={classes.homeContainer}>
        <div>
          <span>welcome to react and redux Home Page</span>
        </div>
        <div>
          <a href="*"> 新規アカウント作成</a>
          <br />
          <a href="*"> ログイン</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
