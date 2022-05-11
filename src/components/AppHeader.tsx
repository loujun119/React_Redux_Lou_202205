import React from "react";
import { makeStyles } from '@material-ui/styles';
import { AppHeaderProps } from '../containers/AppHeaderContainer';

const AppHeaderStyles = makeStyles({
  header: {
    backgroundColor: 'yellow',
    position: 'fixed',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    height: '30px',
    width: '100%',
    margin: '0px',
  }
});

export const AppHeader: React.FC<AppHeaderProps> = (props: AppHeaderProps) => {
  const classes = AppHeaderStyles();
  const userName: string = props.userName;
  const userAction = props.action.userInfoData;
  return (
    <>
    <div className={classes.header}>
      <h2>test</h2>
      {userName !== '' && (
        <div>
          <h1> test2</h1>
          <div><p>this is header</p></div>
        </div>
      )}
    </div>
    </>
  );
}

export default AppHeader;
