import React from "react";
import ExerciseList from "./ExerciseList";

const WorkoutCard = ({ data }) => {

  return (
    <div>
      <p>Workout name: {data.workoutName}</p>
      <p>Workout intensity: {data.workoutIntensity}</p>
      <p>Workout level: {data.workoutLevel}</p>
      <ExerciseList data={data.exercises} />
    </div>
  );
};

export default WorkoutCard;
