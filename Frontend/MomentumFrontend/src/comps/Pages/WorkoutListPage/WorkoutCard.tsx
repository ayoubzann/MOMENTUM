import React from "react";
import ExerciseList from "./ExerciseList";
import { deleteWorkout } from "../../../utils";

const WorkoutCard = ({ data, editor, onDelete }) => {
  return (
    <div className="border p-2 m-4">
      <h2 className="text-2xl"> {data.workoutName}</h2>
      <h3 className="text-xl">Intensity: {data.workoutIntensity}</h3>
      <h3 className="text-xl">Workout level: {data.workoutLevel}</h3>
      {editor ? (
        <button onClick={() => onDelete(data.workoutName)}>Delete</button>
      ) : null}
      <ExerciseList data={data.exercises} />
    </div>
  );
};

export default WorkoutCard;
