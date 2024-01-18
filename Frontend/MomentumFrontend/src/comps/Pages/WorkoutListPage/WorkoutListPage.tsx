import React, { useEffect, useState, useContext } from "react";
import { deleteWorkout, getAllWorkouts } from "../../../utils";
import WorkoutList from "./WorkoutList";
import { Link } from "react-router-dom";
import {MoodContext} from "../../NumberContext";

interface Exercise {
  exerciseName: string;
  exerciseIntensity: number;
  exerciseSets: number;
  exerciseReps: number;
}

interface Workout {
  workoutName: string;
  workoutIntensity: number;
  workoutLevel: string;
  exercises: Exercise[];
}

const WorkoutListPage: React.FC = () => {
  const [workouts, setWorkouts] = useState<Workout[]>([]);
  const [editor, setEditor] = useState<boolean>(false);
  const { mood } = useContext(MoodContext) as { mood: number; updateNumber: (newNumber: number) => void };


  const handleDelete = async (workoutName: string) => {
    try {
      await deleteWorkout(workoutName);
      const updatedWorkouts: Workout[] = await getAllWorkouts();
      setWorkouts(updatedWorkouts);
    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  const filterWorkouts = (): Workout[] => {
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
      const data: Workout[] = await getAllWorkouts();
      setWorkouts(data);
    };

    fetchData();
  }, []);

  const filteredWorkouts: Workout[] = filterWorkouts();

  return (
    <>
      <Link to="/AddWorkouts"> Add Workout</Link>
      <button onClick={() => setEditor(!editor)}> Edit workout list </button>
      <WorkoutList data={filteredWorkouts} editor={editor} onDelete={handleDelete} />
    </>
  );
};

export default WorkoutListPage;
