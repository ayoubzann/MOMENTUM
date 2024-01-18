import React from "react";
import ExerciseList from "./ExerciseList";

const WorkoutCard = ({ data }) => {

  return (
    <div className="border p-2 m-4">
      <h2 className="text-2xl"> {data.workoutName}</h2>
      <h3 className="text-xl">Intensity: {data.workoutIntensity}</h3>
      <h3 className="text-xl">Workout level: {data.workoutLevel}</h3>
      <ExerciseList data={data.exercises} />
    </div>
  );
};

export default WorkoutCard;
