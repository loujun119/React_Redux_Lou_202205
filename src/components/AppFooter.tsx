import React from "react";

import { makeStyles } from '@material-ui/styles';

const AppFooterStyles = makeStyles({
  footer: {
    backgroundColor: 'red',
    position: 'fixed',
    bottom: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '30px',
    width: '100%',
    margin: '0px',
  }

});

export default function AppFooter() {
  const classes = AppFooterStyles();
  return <div className={classes.footer}> AppFooter1 </div>;
}
