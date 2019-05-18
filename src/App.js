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

  const onSelectExercise = id =>
    setExercise(exercises.find(ex => ex.id === id));

  const onCreateExercise = newExercise =>
    setExercises(exercises.concat(newExercise));

  const onDeleteExercise = id => {
    setExercises(exercises.filter(exercise => exercise.id !== id));
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
      />
      <Footer muscles={muscles} category={category} onSelect={setCategory} />
    </>
  );
}
