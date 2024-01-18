// ActiveWorkoutPage.tsx
import React, { useContext, useEffect, useState } from "react";
import { MoodContext } from "../../MoodContext";
import ActiveWorkoutCard from "./ActiveWorkoutCard";

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
            // Switch between set and break
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

  return (
    <div>
      <h1>Active Workout: {workout.workoutName}</h1>
      <h2>Intensity: {workout.workoutIntensity}</h2>
      <h2>Workout Level: {workout.workoutLevel}</h2>
      <button onClick={handleStartClick} disabled={isStarted}>
        Start Workout
      </button>
      <p>Time remaining: {timer}</p>
      <h3>Exercises:</h3>
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
      <button onClick={handleFinishClick} disabled={!isStarted}>
        {timer === 0 ? "Next set/break" : "Finish"}
      </button>
    </div>
  );
};

export default ActiveWorkoutPage;
