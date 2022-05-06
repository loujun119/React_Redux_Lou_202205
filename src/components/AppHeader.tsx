import React from "react";
import { makeStyles } from '@material-ui/styles';

const AppHeaderStyles = makeStyles({
  header: {
    // display: 'flex',
    // alignItems: 'top',
    backgroundColor: 'yellow',
  }
});

export default function AppHeader() {
  const classes = AppHeaderStyles();
  return <div className={classes.header}> AppHeader </div>;
}
