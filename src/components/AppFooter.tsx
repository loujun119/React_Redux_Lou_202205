import React from "react";

import { makeStyles } from '@material-ui/styles';

const AppFooterStyles = makeStyles({
  footer: {
    // display: 'flex',
    // alignItems: 'center',
    backgroundColor: 'red',
  }

});

export default function AppFooter() {
  const classes = AppFooterStyles();
  return <div className={classes.footer}> AppFooter1 </div>;
}
