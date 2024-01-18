import React, { useEffect, useState, useContext } from "react";
import { deleteWorkout, getAllWorkouts } from "../../../utils";
import WorkoutList from "./WorkoutList";
import { Link } from "react-router-dom";
import {MoodContext} from "../../MoodContext";

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
    <div className="flex flex-col">
      <Link to="/AddWorkouts" className="bg-green-100 my-4 p-2 text-black"> <p className="text-xl">Add Workout</p></Link>
      <button className="text-xl bg-yellow-100" onClick={() => setEditor(!editor)}> Edit workout list </button>
      <WorkoutList data={filteredWorkouts} editor={editor} onDelete={handleDelete} />
    </div>
  );
};

export default WorkoutListPage;
