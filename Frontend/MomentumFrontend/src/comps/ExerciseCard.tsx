import React from "react";

const ExerciseCard = ({data}) => {



  return (
      <div className="m-4 p-2 border rounded-xl">
      <p>ExerciseName: {data.exerciseName} </p>
      <p>Intensity: {data.exerciseIntensity}</p>
      <p>Reps: {data.exerciseReps}</p>
      <p>Sets: {data.exerciseSets}</p>
    </div>
  );
};

export default ExerciseCard;
