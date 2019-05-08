import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
  Fab,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  withStyles
} from '@material-ui/core';

import { Add } from '@material-ui/icons';

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(({ muscles, onCreate, classes }) => {
  const [open, setOpen] = useState(false);
  const [dialogForm, setDialogForm] = useState({
    title: '',
    description: '',
    muscles: ''
  });

  const handleChange = ({ target: { name, value } }) => {
    setDialogForm({
      ...dialogForm,
      [name]: value
    });
  };

  const handleSubmit = () => {
    onCreate({
      ...dialogForm,
      id: dialogForm.title.toLocaleLowerCase().replace(/ /g, '-')
    });
    setOpen(!open);
    setDialogForm({
      title: '',
      description: '',
      muscles: ''
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
              label="Title"
              name="title"
              value={dialogForm.title}
              onChange={handleChange}
              margin="normal"
              className={classes.FormControl}
            />
            <br />
            <FormControl className={classes.FormControl}>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                value={dialogForm.muscles}
                name="muscles"
                onChange={handleChange}
              >
                {muscles.map(muscle => (
                  <MenuItem key={muscle} value={muscle}>
                    {muscle}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Description"
              name="description"
              multiline
              rows="4"
              value={dialogForm.description}
              onChange={handleChange}
              margin="normal"
              className={classes.FormControl}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
});
