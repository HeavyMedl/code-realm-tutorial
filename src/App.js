import React, { useState } from "react";
import Header from "./components/Layouts/Header";
import Footer from "./components/Layouts/Footer";
import Exersizes from "./components/Exercises";
import CssBaseline from "@material-ui/core/CssBaseline";
import { muscles, storeExercises } from "./store";

export default function App() {
  const [exercises, setExercises] = useState(storeExercises);

  const getExercisesByMuscle = muscle => {
    return exercises.filter(exercise => {
      return exercise === muscle;
    });
  };
  return (
    <>
      <CssBaseline />
      <Header />
      <Exersizes />
      <Footer muscles={muscles} />
    </>
  );
}
