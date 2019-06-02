import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Dialog from '../Exercises/Dialog';
import { withStyles } from '@material-ui/core';

const styles = {
  flex: {
    flex: 1
  }
};

export default withStyles(styles)(({ classes, muscles, onCreate }) => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="headline" color="inherit" className={classes.flex}>
        Exercise Database
      </Typography>
      <Dialog muscles={muscles} onCreate={onCreate} />
    </Toolbar>
  </AppBar>
));
