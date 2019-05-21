import React, { useState, useEffect } from 'react';

import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  withStyles
} from '@material-ui/core';

const styles = theme => ({
  FormControl: {
    width: 500
  }
});

export default withStyles(styles)(
  ({ classes, muscles, onSubmit, exercise }) => {
    const getInitialState = ex => ({
      title: (ex && ex.title) || '',
      description: (ex && ex.description) || '',
      muscles: (ex && ex.muscles) || '',
      ...ex
    });

    const [form, setForm] = useState(getInitialState(exercise));

    useEffect(() => {
      setForm(getInitialState(exercise));
    }, [exercise]);

    const handleChange = ({ target: { name, value } }) => {
      setForm({
        ...form,
        [name]: value
      });
    };

    const handleSubmit = () => {
      onSubmit({
        id: form.title.toLocaleLowerCase().replace(/ /g, '-'),
        ...form
      });
      setForm(getInitialState());
    };

    return (
      <form>
        <TextField
          label="Title"
          name="title"
          value={form.title}
          onChange={handleChange}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <FormControl className={classes.FormControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select value={form.muscles} name="muscles" onChange={handleChange}>
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
          value={form.description}
          onChange={handleChange}
          margin="normal"
          className={classes.FormControl}
        />
        <br />
        <Button color="primary" variant="contained" onClick={handleSubmit}>
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    );
  }
);
