// ActiveWorkoutPage.tsx
import React, { useContext, useEffect, useState } from "react";
import { MoodContext } from "../../MoodContext";
import ActiveWorkoutCard from "./ActiveWorkoutCard";
import { useNavigate } from "react-router-dom";

const ActiveWorkoutPage: React.FC = () => {
  const { workout } = useContext(MoodContext);
  const [timer, setTimer] = useState<number>(5);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [focusedExerciseIndex, setFocusedExerciseIndex] = useState<number>(0);
  const [currentSet, setCurrentSet] = useState<number>(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isStarted && currentSet <= workout.exercises[0].exerciseSets) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 0) {
            return currentSet % 2 === 1 ? 3 : 5;
          } else {
            return prevTimer - 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isStarted, currentSet, workout.exercises]);

  const handleStartClick = () => {
    setIsStarted(true);
  };

  const handleFinishClick = () => {
    setIsStarted(false);
  };

  const navigate = useNavigate();

  const handleFinishWorkout = () => {
    navigate("/FinishedWorkout");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl">Selected Workout: </h2>
        <h1 className="text-orange-600">{workout.workoutName}</h1>
      <h2>Intensity: {workout.workoutIntensity}</h2>
      <h2>Workout Level: {workout.workoutLevel}</h2>
      <button className="bg-emerald-200" onClick={handleStartClick} disabled={isStarted}>
        Start Workout
      </button>
      <h2 className="text-xl p-10">Time remaining: <h1 className="text-orange-500">{timer}</h1></h2>
      <h2 className="text-xl">Exercises:</h2>
      {workout.exercises.map((exercise, index) => (
        <div key={index}>
          <ActiveWorkoutCard
            items={[exercise]}
            isFocused={focusedExerciseIndex === index}
            isRunning={isStarted}
            isBreak={timer === 0}
          />
        </div>
      ))}
      <button className="m-4 bg-red-300" onClick={handleFinishClick} disabled={!isStarted}>
        <h2 className="text-xl">{timer === 0 ? "Next set/break" : "Stop Workout"}</h2>
      </button>
      <button className="m-4 bg-orange-200" onClick={handleFinishWorkout} disabled={isStarted}>
        <h2 className="text-xl">Finish Workout</h2>
      </button>
    </div>
  );
};

export default ActiveWorkoutPage;
