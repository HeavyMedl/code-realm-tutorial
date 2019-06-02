import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab
} from '@material-ui/core';
import { Add } from '@material-ui/icons';
import Form from './Form';

export default ({ muscles, onCreate }) => {
  const [open, setOpen] = useState(false);

  const handleCreate = exercise => {
    onCreate(exercise);
    setOpen(!open);
  };

  return (
    <>
      <Fab aria-label="Add" size="small" onClick={() => setOpen(!open)}>
        <Add />
      </Fab>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={() => setOpen(!open)}
      >
        <DialogTitle>Create a New Exercise</DialogTitle>
        <DialogContent>
          <DialogContentText>Please fill out the form below.</DialogContentText>
          <Form muscles={muscles} onSubmit={handleCreate} />
        </DialogContent>
      </Dialog>
    </>
  );
};
