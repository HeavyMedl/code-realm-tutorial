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
    return Object.entries(
      exercises.reduce((acc, exercise) => {
        const { muscles } = exercise;
        acc[muscles] = acc[muscles] ? [...acc[muscles], exercise] : [exercise];
        return acc;
      }, {})
    );
  };

  const onSelectExercise = id =>
    setExercise(exercises.find(ex => ex.id === id));

  const onCreateExercise = newExercise =>
    setExercises(exercises.concat(newExercise));

  return (
    <>
      <CssBaseline />
      <Header muscles={muscles} onCreate={onCreateExercise} />
      <Exersizes
        exercise={exercise}
        exercises={getExercisesByMuscle()}
        category={category}
        onSelect={onSelectExercise}
      />
      <Footer muscles={muscles} category={category} onSelect={setCategory} />
    </>
  );
}
