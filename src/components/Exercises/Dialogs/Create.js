import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Fab
} from "@material-ui/core";

import { Add } from "@material-ui/icons";

export default props => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Fab aria-label="Add" size="small" onClick={() => setOpen(!open)}>
        <Add />
      </Fab>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
