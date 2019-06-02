import React, { useState } from 'react';
import Header from './components/Layouts/Header';
import Footer from './components/Layouts/Footer';
import Exersizes from './components/Exercises';
import CssBaseline from '@material-ui/core/CssBaseline';
import { muscles, storeExercises } from './store';

export default function App() {
  const [exercises, setExercises] = useState(storeExercises);
  const [category, setCategory] = useState();
  const [exercise, setExercise] = useState({});
  const [editMode, setEditMode] = useState(false);

  const getExercisesByMuscle = () => {
    const initialExercises = muscles.reduce(
      (acc, muscle) => ({
        ...acc,
        [muscle]: []
      }),
      {}
    );
    return Object.entries(
      exercises.reduce((obj, exercise) => {
        const { muscles } = exercise;
        obj[muscles] = [...obj[muscles], exercise];
        return obj;
      }, initialExercises)
    );
  };

  const onSelectExercise = id => {
    setExercise(exercises.find(ex => ex.id === id));
    setEditMode(false);
  };

  const onCreateExercise = newExercise =>
    setExercises(exercises.concat(newExercise));

  const onDeleteExercise = id => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
    setEditMode(exercise.id === id ? false : editMode);
    setExercise(exercise.id === id ? {} : exercise);
  };

  const onEditExercise = id => {
    setExercise(exercises.find(ex => ex.id === id));
    setEditMode(true);
  };

  const onExerciseUpdate = exercise => {
    setExercises([...exercises.filter(ex => exercise.id !== ex.id), exercise]);
    setExercise(exercise);
  };

  return (
    <>
      <CssBaseline />
      <Header muscles={muscles} onCreate={onCreateExercise} />
      <Exersizes
        exercise={exercise}
        exercises={getExercisesByMuscle()}
        category={category}
        onSelect={onSelectExercise}
        onDelete={onDeleteExercise}
        onEdit={onEditExercise}
        onUpdate={onExerciseUpdate}
        editMode={editMode}
        muscles={muscles}
      />
      <Footer muscles={muscles} category={category} onSelect={setCategory} />
    </>
  );
}
