import React, { useEffect, useState } from "react";
import { deleteWorkout, getAllWorkouts } from "../../../utils";
import WorkoutList from "./WorkoutList";
import { Link } from "react-router-dom";

const WorkoutListPage = () => {
  const [workouts, setWorkouts] = useState([]);

  const handleDelete = async (workoutName) => {
    try {
      await deleteWorkout(workoutName);
      const updatedWorkouts = await getAllWorkouts();
      setWorkouts(updatedWorkouts);
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllWorkouts();
      setWorkouts(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <Link to="/AddWorkouts"> Add Workout</Link>
      <WorkoutList data={workouts} onDelete={handleDelete} />
    </>
  );
};

export default WorkoutListPage;
