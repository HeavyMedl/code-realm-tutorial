import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Fab,
  TextField
} from "@material-ui/core";

import { Add } from "@material-ui/icons";

export default props => {
  const [open, setOpen] = useState(false);
  const [dialogForm, setDialogForm] = useState({
    title: "",
    description: "",
    muscles: ""
  });

  const handleChange = ({ target: { name, value } }) => {
    setDialogForm({
      ...dialogForm,
      [name]: value
    });
  };

  return (
    <>
      <Fab aria-label="Add" size="small" onClick={() => setOpen(!open)}>
        <Add />
      </Fab>
      <Dialog open={open} onClose={() => setOpen(!open)}>
        <DialogTitle id="form-dialog-title">Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <form>
            <TextField
              id="standard-name"
              label="Name"
              name="title"
              value={dialogForm.title}
              onChange={handleChange}
              margin="normal"
            />
          </form>
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
