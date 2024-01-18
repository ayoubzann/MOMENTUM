import React, { useEffect, useState, FormEvent } from "react";
import CreateWorkout from "./CreateWorkout";
import CreateExercise from "./CreateExercise";
import { Exercise, Workout, getAllExercises, postWorkout } from "../../../utils";
import ExerciseList from "../WorkoutListPage/ExerciseList";


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

  const handleWSubmit = (event: FormEvent) => {
    event.preventDefault();
    const workoutToAdd: Workout = {
      workoutName: wName,
      workoutIntensity: wIntensity,
      workoutLevel: wLevel,
      exercises: exerciseList,
    };
    setWorkout(workoutToAdd);
  };

  useEffect(() => {
    if (workout !== null) {
      postWorkout(workout);
    }
  }, [workout]);

  return (
    <div>
      <h1>Design your own workout</h1>
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
      <h2>Current exercises:</h2>
      <ExerciseList data={exerciseList} />
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
