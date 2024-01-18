import React from "react";
import ExerciseList from "./ExerciseList";

const WorkoutCard = ({ data }) => {

  return (
    <div className="border border-green-500 p-2 m-4">
      <p>Workout name: {data.workoutName}</p>
      <p>Workout intensity: {data.workoutIntensity}</p>
      <p>Workout level: {data.workoutLevel}</p>
      <ExerciseList data={data.exercises} />
    </div>
  );
};

export default WorkoutCard;
