import React, { useEffect, useState, useContext } from "react";
import { deleteWorkout, getAllWorkouts } from "../../../utils";
import WorkoutList from "./WorkoutList";
import { Link } from "react-router-dom";
import MoodContext from "../../NumberContext";

const WorkoutListPage = () => {
  const [workouts, setWorkouts] = useState([]);
  const [editor, setEditor] = useState(false);
  const { mood } = useContext(MoodContext);

  const handleDelete = async (workoutName) => {
    try {
      await deleteWorkout(workoutName);
      const updatedWorkouts = await getAllWorkouts();
      setWorkouts(updatedWorkouts);
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  const filterWorkouts = () => {
    if (mood <= 4) {
      return workouts.filter((workout) => workout.workoutIntensity <= 4);
    } else if (mood <= 7) {
      return workouts.filter((workout) => workout.workoutIntensity <= 7);
    } else {
      return workouts;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllWorkouts();
      setWorkouts(data);
    };

    fetchData();
  }, []);

  const filteredWorkouts = filterWorkouts();

  return (
    <>
      <Link to="/AddWorkouts"> Add Workout</Link>
      <button onClick={() => setEditor(!editor)}> Edit workout list </button>
      <WorkoutList data={filteredWorkouts} editor={editor} onDelete={handleDelete} />
    </>
  );
};

export default WorkoutListPage;
