import React, { useState } from "react";
import CreateWorkout from "./CreateWorkout";
import CreateExercise from "./CreateExercise";

const WorkoutCrudPage = () => {
  const [wName, setWName] = useState("");
  const [wIntensity, setWIntensity] = useState(0);
  const [wLevel, setWLevel] = useState("");
  // const [eName, setEName] = useState("");
  // const [eIntensity, setEIntensity] = useState

  return (
    <div>
      WorkoutCrudPage
      <CreateWorkout
        wName={wName}
        setWName={setWName}
        wIntensity={wIntensity}
        setWIntensity={setWIntensity}
        wLevel={wLevel}
        setWLevel={setWLevel}
      />
      <CreateExercise />
    </div>
  );
};

export default WorkoutCrudPage;
