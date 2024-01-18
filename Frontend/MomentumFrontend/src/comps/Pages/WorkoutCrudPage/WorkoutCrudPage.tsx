import React, { useEffect, useState, FormEvent } from "react";
import CreateWorkout from "./CreateWorkout";
import CreateExercise from "./CreateExercise";
import {
  Exercise,
  Workout,
  getAllExercises,
  postWorkout,
} from "../../../utils";
import ExerciseList from "../WorkoutListPage/ExerciseList";
import { useNavigate } from "react-router-dom";

const WorkoutCrudPage: React.FC = () => {
  const [wName, setWName] = useState<string>("");
  const [wIntensity, setWIntensity] = useState<number>(0);
  const [wLevel, setWLevel] = useState<string>("Beginner");
  const [eName, setEName] = useState<string>("");
  const [eIntensity, setEIntensity] = useState<number>(0);
  const [sets, setSets] = useState<number>(0);
  const [reps, setReps] = useState<number>(0);
  const [exerciseList, setExerciseList] = useState<Exercise[]>([]);
  const [workout, setWorkout] = useState<Workout | null>(null);
  const [existingExercises, setExistingExercises] = useState<Exercise[]>([]);

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    const fetchExercises = async () => {
      setExistingExercises(await getAllExercises());
    };

    fetchExercises();
  }, []);

  const handleESubmit = (event: FormEvent) => {
    event.preventDefault();
    const exerciseArr: Exercise[] = [
      ...exerciseList,
      {
        exerciseName: eName,
        exerciseIntensity: eIntensity,
        exerciseSets: sets,
        exerciseReps: reps,
      },
    ];
    setExerciseList(exerciseArr);
  };

  const handleWSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const workoutToAdd: Workout = {
        workoutName: wName,
        workoutIntensity: wIntensity,
        workoutLevel: wLevel,
        exercises: exerciseList,
      };
      await postWorkout(workoutToAdd);
      navigate('/workouts');
    } catch (error) {
      console.error("Workout submission failed:", error);
    }
  };

  useEffect(() => {
    if (workout !== null) {
      postWorkout(workout);
    }
  }, [workout]);

  return (
    <div className="flex flex-col w-3/4 mx-auto items-center justify-center">
      <button onClick={handleGoBack}>Go back</button>
      <h1 className="m-4">Design your own workout</h1>
      <br></br>
      <CreateExercise
        eName={eName}
        setEName={setEName}
        eIntensity={eIntensity}
        setEIntensity={setEIntensity}
        sets={sets}
        setSets={setSets}
        reps={reps}
        setReps={setReps}
        handleESubmit={handleESubmit}
        existingExercises={existingExercises}
      />
      <div className="bg-orange-100 m-5 w-96 rounded-lg p-4">
        <h2 className="text-xl">Current exercises:</h2>
        <ExerciseList data={exerciseList} />
      </div>
      <CreateWorkout
        wName={wName}
        setWName={setWName}
        wIntensity={wIntensity}
        setWIntensity={setWIntensity}
        wLevel={wLevel}
        setWLevel={setWLevel}
        handleWSubmit={handleWSubmit}
      />
    </div>
  );
};

export default WorkoutCrudPage;
