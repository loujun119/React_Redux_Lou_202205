import React from "react";
import { Link } from "react-router-dom";
import { AppHeaderProps } from "../../containers/AppHeaderContainer";
import DeckIcon from "@mui/icons-material/Deck";
import "./AppHeader.css";

export const AppHeader: React.FC<AppHeaderProps> = (props: AppHeaderProps) => {
  const userName: string = props.userName;
  return (
    <div className="app-header">
      <Link to="/">
        <DeckIcon sx={{ fontSize: 40 }} color="action" />
      </Link>
      <div>
        <Link className="app-header-link" to="/login">
          ログイン
        </Link>
        <Link className="app-header-link" to="/login/addNew">
          新規作成
        </Link>
      </div>
    </div>
  );
};

export default AppHeader;
