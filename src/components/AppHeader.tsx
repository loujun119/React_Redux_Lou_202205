import React from "react";
import { makeStyles } from '@material-ui/styles';

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

export default function AppHeader() {
  const classes = AppHeaderStyles();
  return <div className={classes.header}> AppHeader </div>;
}
