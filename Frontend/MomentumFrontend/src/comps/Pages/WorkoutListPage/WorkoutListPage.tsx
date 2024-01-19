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
    <div className="flex flex-col w-96 items-center floatInPages">
      <div className="flex justify-center">
      <Link to="/AddWorkouts" className="bg-secondary w-28 text-center py-auto flex items-center m-2 justify-center hover:bg-green-500 h-12 hover:text-text rounded-xl text-text align-middle"> <p className="text-xl">Add </p></Link>
      <button className="text-xl rounded-xl flex items-center justify-center bg-red-300 w-28 h-12 m-2  hover:bg-red-500" onClick={() => setEditor(!editor)}> Remove  </button>

      </div>
      <h1 className="momentum mt-4">momentum</h1>
      <WorkoutList data={filteredWorkouts} editor={editor} onDelete={handleDelete} />
    </div>
  );
};

export default WorkoutListPage;
