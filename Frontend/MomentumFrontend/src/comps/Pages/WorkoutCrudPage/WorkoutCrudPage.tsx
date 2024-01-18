import { useEffect, useState } from "react";
import CreateWorkout from "./CreateWorkout";
import CreateExercise from "./CreateExercise";
import { getAllExercises, postWorkout } from "../../../utils";
import ExerciseList from "../WorkoutListPage/ExerciseList";

const WorkoutCrudPage = () => {
  const [wName, setWName] = useState("");
  const [wIntensity, setWIntensity] = useState(0);
  const [wLevel, setWLevel] = useState("Beginner");
  const [eName, setEName] = useState("");
  const [eIntensity, setEIntensity] = useState(0);
  const [sets, setSets] = useState(0);
  const [reps, setReps] = useState(0);
  const [exerciseList, setExerciseList] = useState([]);
  const [workout, setWorkout] = useState({});
  const [existingExercises, setExistingExercises] = useState([]);


  useEffect(()=>{
    const fetchExercises = async() => {
     setExistingExercises(await getAllExercises());
    }

    fetchExercises();
  }, [])

  const handleESubmit = (event) => {
    event.preventDefault();
    const exerciseArr = [
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

  const handleWSubmit = (event) => {
    event.preventDefault();
    const workoutToAdd = {
      workoutName: wName,
      workoutIntensity: wIntensity,
      workoutLevel: wLevel,
      exercises: exerciseList,
    };
    setWorkout(workoutToAdd);
  };

  useEffect(() => {
    if (Object.keys(workout).length > 0) {
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
